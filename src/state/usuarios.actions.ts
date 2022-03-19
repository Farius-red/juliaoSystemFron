import { NuevoUsuario } from './../app/core/modelos/Usuarios/nuevoUsuario.Model';

export class AddUsuario {
  static readonly type = '[Usuarios] Add ';
  constructor(public payload: NuevoUsuario) { }
}

export class UpdateUsuario{
  static readonly type = '[Usuarios] update'
  constructor(public payload : NuevoUsuario){}
}

export class GetUsuario{
  static readonly type= '[Usuarios] get'
  
}

export class DeleteUsuario{
  static readonly type = '[Usuarios] delete'
  constructor(public id: string) {
    
  }
}