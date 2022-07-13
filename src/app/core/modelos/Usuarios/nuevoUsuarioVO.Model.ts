import { JwtVO } from "./jwtVO.Model";
import { DetailsAddressVO } from "./PlacesVO";

export interface NuevoUsuarioVO{
    idUsuario:string,
    password:string,
    token:JwtVO,
    idUrl:string,
    balance:number,
    email: string,
    createDate:string
    creator: string,
    updateDate:string,
    dateUser: string,
    state: StateVO,
    idRol:RolVO,
    
}

 export interface StateVO{
    idStateUser: number,
    nameState: string,
 }

export interface DatosUsuarioVO{
    idDateUser : number,
    firsName:string,
    seconName?:string,
    firsLastName:string,
    secondLastName?:string,
    phone:number,
    address:DetailsAddressVO

}




export interface RolVO {
    idRol:number,
    createDate:string
    updateDate:string,

}