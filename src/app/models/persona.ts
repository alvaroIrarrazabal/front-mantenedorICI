import { Comuna } from "./comuna";
import { Pais } from "./pais";
import { Region } from "./region";
import { Rol } from "./rol";



export class Persona {
  public id: number;
  public nombre: string;
  public apellidoPaterno: string ;
  public apellidoMaterno: string ;
  public email: string ;
  public telefono: string ;
  public cumple: Date;
  public pais: Pais;
  public region: Region;
  public comuna: Comuna;
  public roles: Rol[];
  public supervisorId: number;
  public genero: string;
  public estadoCivil: string;
  public redSocial: string;
  public conyugeId: number;
  public padreId: number;
  public madreId: number;
  public ocupacionId: number;


 }
