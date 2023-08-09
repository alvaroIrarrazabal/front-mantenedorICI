import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  /**
   *obtiene todas las personas
   * @returns
   */

getPersona(){
  const endpoint =` ${base_url}/personas`;
  return this.http.get(endpoint);
}

  /**
   *obtiene todas los roles
   * @returns
   */

getRoles(){
  const endpoint= `${base_url}/roles`
  return this.http.get(endpoint);
}
getPais(){
  const endpoint= `${base_url}/paises`
  return this.http.get(endpoint);
}

getRegiones(){
  const endpoint= `${base_url}/regiones`
  return this.http.get(endpoint);
}

getRegionesPorPais(id:any){
  const endpoint= `${base_url}/regiones/pais/${id}`
  return this.http.get(endpoint);
}

getComuna(){
  const endpoint= `${base_url}/comunas`
  return this.http.get(endpoint);
}

getComunaPorRegion(id:any){
  const endpoint= `${base_url}/comunas/region/${id}`
  return this.http.get(endpoint);
}


getSupervisores(){
  const endpoint= `${base_url}/personas/supervisores`
  return this.http.get(endpoint);
}

getEstadoCivil(){
  const endpoint= `${base_url}/personas/estadoCivil`
  return this.http.get(endpoint);
}

getOcupaciones(){
  const endpoint= `${base_url}/ocupaciones`;
  return this.http.get(endpoint);
}
getPadres(){
  const endpoint= `${base_url}/personas/padres`;
  return this.http.get(endpoint);
}
getMadres(){
  const endpoint= `${base_url}/personas/madres`;
  return this.http.get(endpoint);
}

/**
 * guarar persona
 */
guardarPersona(body : any){

  const endpoint =`${base_url}/personas`
 return this.http.post(endpoint, body);
}




}
