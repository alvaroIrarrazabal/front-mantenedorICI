import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaService } from 'src/app/modules/shared/services/persona.service';
import { NewPersonaComponent } from '../new-persona/new-persona.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  constructor(private personaService:PersonaService,
              public dialog: MatDialog, private snackBar:MatSnackBar){ }

  ngOnInit(): void {
    this.getPersonas()
  }
//displayedColumns
  columnasDeLaTablaPersona: string[]=['nombre','apellidoPaterno','email','telefono','supervisorId','actions'];
  dataSource = new MatTableDataSource<PersonaElement>

getPersonas(){
  this.personaService.getPersona()
  .subscribe(data =>{
    console.log(data)
    this.processPersonaResponse(data)
  }, (error)=>{
    console.log("error : ",error);
  })
}

processPersonaResponse(resp:any){
  const dataPersona: PersonaElement[]=[];
if(resp.metadata[0].code == "00"){
  let listaPersonas = resp.personaResponse.persona;
  listaPersonas.forEach((element: PersonaElement) => {
dataPersona.push(element);
  });
  this.dataSource = new MatTableDataSource<PersonaElement>(dataPersona);

}


}


openPersonaDialog(){
  const dialogRef = this.dialog.open( NewPersonaComponent, {
    width:'60%',
    height:'80vh'
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result==1){
this.openSnackBar("Persona agregada","exito");
this.getPersonas();
    }else if(result==2){
      this.openSnackBar("Persona NO agregada","Error")

    }
  });
}

openSnackBar(message:string, action:string):MatSnackBarRef<SimpleSnackBar>{
  return this.snackBar.open(message,action,{
    duration:2000
  })
}


}


export interface PersonaElement{
nombre:string,
apellidoPaterno:string,
email:string,
telefono:string,
supervisorId:number

}
