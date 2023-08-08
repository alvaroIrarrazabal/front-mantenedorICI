import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaService } from 'src/app/modules/shared/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  constructor(private personaService:PersonaService){ }

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


}


export interface PersonaElement{
nombre:string,
apellidoPaterno:string,
email:string,
telefono:string,
supervisorId:number

}
