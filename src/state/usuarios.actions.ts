import { NuevoUsuarioVO } from "src/app/core/modelos/Usuarios/nuevoUsuarioVO.Model";


export class AddUsuario {
  static readonly type = '[Usuarios] Add ';
  constructor(public payload: NuevoUsuarioVO) { }
}

export class UpdateUsuario{
  static readonly type = '[Usuarios] update'
  constructor(public payload : NuevoUsuarioVO){}
}

export class GetUsuario{
  static readonly type= '[Usuarios] get'
  
}

export class DeleteUsuario{
  static readonly type = '[Usuarios] delete'
  constructor(public id: string) {
    
  }
}