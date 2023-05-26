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


}
