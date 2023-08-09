import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PersonaService } from 'src/app/modules/shared/services/persona.service';
import { PersonaElement } from '../persona/persona.component';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/models/persona';


export interface Personas {
  id: number;
  nombre: string;
  apellidoPaterno:string;
}
export interface Roles {
  id: number;
  nombre: string;
}
export interface Paises {
  id: number;
  nombre: string;
}
export interface Regiones {
  id: number;
  nombre: string;
}
export interface Comunas {
  id: number;
  nombre: string;
}
export interface Supervisores {
  id: number;
  nombre: string;
  apellidoPaterno:string;
  apellidoMaterno:string;
}
export interface Casados {
  id: number;
  nombre: string;
  apellidoPaterno:string;
  apellidoMaterno:string;
}
export interface Madres {
  id: number;
  nombre: string;
  apellidoPaterno:string;
  apellidoMaterno:string;
}
export interface Padres {
  id: number;
  nombre: string;
  apellidoPaterno:string;
  apellidoMaterno:string;
}

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css'],
})
export class NewPersonaComponent implements OnInit {
  public personaForm: FormGroup;
  roles: Roles[] = [];
  paises: Paises[] = [];
  comunas: Comunas[] = [];
  regiones: Regiones[] = [];
  padres: Padres[] = [];
  madres: Madres[] = [];
  supervisores: Supervisores[] = [];
  casados: Casados[] = [];
  ocupaciones:any[] = [];
  persona = new Persona()
   estadoCivil=[
    {id:1,nombre:"soltero"},
    {id:2,nombre:"casado"},
    {id:3,nombre:"divorciado"},
    {id:4,nombre:"viudo"}
   ]

   genero=[
    {id:1,nombre:"femenino"},
    {id:2,nombre:"masculino"},

   ]


  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private dialogRef: MatDialogRef<NewPersonaComponent>
  ) {
    this.personaForm = this.fb.group({
     nombre: ['isidora', Validators.required],
      apellidoPaterno: ['irarrazabal', Validators.required],
      apellidoMaterno: ['faete', Validators.required],
      email: ['alvaro@gmail.com', Validators.required],
      telefono: ['954565112', Validators.required],
      cumple:['',Validators.required],
      pais: ['', Validators.required],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      supervisorId: ['', Validators.required],
      genero: ['h', Validators.required],
      estadoCivil: ['hh', Validators.required],
      redSocial: ['hh', Validators.required],
      conyugeId: ['', Validators.required],
      padreId: ['', Validators.required],
      madreId: ['', Validators.required],
      ocupacionId: ['', Validators.required],
      roles: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.obtenerRoles();
    this.obtenerPaises();
    this.getPersonas();
    this.obtenerOcupaciones();
    this.obtenerSupervisores();
    this.obtenerEstadoCivil();
    this.obtenerPadres();
    this.obtenerMadres();
  }

  guardarPersona() {

    let data = {
      nombre: this.personaForm.get('nombre')?.value,
      apellidoPaterno: this.personaForm.get('apellidoPaterno')?.value,
      apellidoMaterno: this.personaForm.get('apellidoMaterno')?.value,
      email: this.personaForm.get('email')?.value,
      telefono: this.personaForm.get('telefono')?.value,
      cumple: this.personaForm.get('cumple')?.value,
      pais: this.personaForm.get('pais')?.value,
      region: this.personaForm.get('region')?.value,
      comuna: this.personaForm.get('comuna')?.value,
      supervisorId: this.personaForm.get('supervisorId')?.value,
      genero: this.personaForm.get('genero')?.value,
      estadoCivil: this.personaForm.get('estadoCivil')?.value,
      redSocial: this.personaForm.get('redSocial')?.value,
      conyugeId: this.personaForm.get('conyugeId')?.value,
      padreId: this.personaForm.get('padreId')?.value,
      madreId: this.personaForm.get('madreId')?.value,
      ocupacionId: this.personaForm.get('ocupacionId')?.value,
      roles: this.personaForm.get('roles')?.value
    }

    const cargarDatos = new FormData();

    cargarDatos.append('nombre',data.nombre);
    cargarDatos.append('apellidoPaterno',data.apellidoPaterno);
    cargarDatos.append('apellidoMaterno',data.apellidoMaterno);
    cargarDatos.append('email',data.email);
    cargarDatos.append('telefono',data.telefono);
    cargarDatos.append('cumple',data.cumple);
    cargarDatos.append('pais',data.pais);
    cargarDatos.append('region',data.region);
    cargarDatos.append('comuna',data.comuna);
    cargarDatos.append('supervisorId',data.supervisorId);
    cargarDatos.append('genero',data.genero);
    cargarDatos.append('estadoCivil',data.estadoCivil);
    cargarDatos.append('redSocial',data.redSocial);
    cargarDatos.append('conyugeId',data.conyugeId);
    cargarDatos.append('padreId',data.padreId);
    cargarDatos.append('madreId',data.madreId);
    cargarDatos.append('ocupacionId',data.ocupacionId);
    cargarDatos.append('roles',data.roles);

    console.log(cargarDatos);
    this.personaService.guardarPersona(cargarDatos).subscribe({
      next: (data: any) => {
        this.dialogRef.close(1);
      },
      error: (error) => {
        this.dialogRef.close(2);
      },
    });
  }

  cancelar() {}

  obtenerRoles() {
    this.personaService.getRoles().subscribe({
      next: (data: any) => {
        this.roles = data.rolResponse.rol;
      },
      error: (error: any) => {
        console.log('error : ', error);
      },
    });
  }

  obtenerPaises() {
    this.personaService.getPais().subscribe({
      next: (data: any) => {
        console.log('Retrieved countries: ' + JSON.stringify(data));
        this.paises = data.paisResponse.pais;
        console.log(this.paises);
      },
      error: (error: any) => {
        console.log('error : ', error);
      },
    });
  }

  buscarPais(paises: any) {

    console.log(paises.value.value);
    this.obtenerRegiones(paises.value);
  }

  buscarRegion(regiones: any) {

    console.log(regiones.value.value);
    this.obtenerComunas(regiones.value);
  }


  obtenerRegiones(parametro:any) : void {
    this.personaService.getRegionesPorPais(parametro).subscribe({
      next: (data: any) => {
        this.regiones = data.regionResponse.region;
        console.log('Retrieved countries: ' + JSON.stringify(this.regiones));
      },
      error: (error: any) => {
        console.log('error : ', error);
      },
    });
  }

  obtenerComunas(id:any) {
    this.personaService.getComunaPorRegion(id).subscribe({
      next: (data: any) => {
        this.comunas = data.comunaResponse.comuna;
      },
      error: (error: any) => {
        console.log('error : ', error);
      },
    });
  }

  obtenerOcupaciones(){
    this.personaService.getOcupaciones().subscribe({
      next:(data:any)=>{
        this.ocupaciones = data.ocupacionResponse.ocupacion;
      },
      error: (error: any) => {
        console.log('error : ', error);
      },
    })
  }

  getPersonas() {
    this.personaService.getPersona().subscribe({
      next: (data: any) => {
        this.padres = data.personaResponse.persona;
      },
      error: (error) => {
        console.log('error : ', error);
      },
    });
  }


  obtenerSupervisores() {
    this.personaService.getSupervisores().subscribe({
      next: (data: any) => {
        this.supervisores = data.personaResponse.persona;
      },
      error: (error) => {
        console.log('error : ', error);
      },
    });
  }

  obtenerEstadoCivil() {
    this.personaService.getEstadoCivil().subscribe({
      next: (data: any) => {
        this.casados = data.personaResponse.persona;
      },
      error: (error) => {
        console.log('error : ', error);
      },
    });
  }

  obtenerPadres() {
    this.personaService.getPadres().subscribe({
      next: (data: any) => {
        this.padres = data.personaResponse.persona;
      },
      error: (error) => {
        console.log('error : ', error);
      },
    });
  }

  obtenerMadres() {
    this.personaService.getMadres().subscribe({
      next: (data: any) => {
        this.madres = data.personaResponse.persona;
      },
      error: (error) => {
        console.log('error : ', error);
      },
    });
  }


}
