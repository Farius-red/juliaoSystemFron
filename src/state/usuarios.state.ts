import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddUsuario } from './usuarios.actions';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { NuevoUsuarioVO } from 'src/app/core/modelos/Usuarios/nuevoUsuarioVO.Model';

export class UsuariosStateModel {
  public usuarios: NuevoUsuarioVO[]=[];
}

const defaults = {
  usuarios: [],
  usuarioSelecccionado: null
};

@State<UsuariosStateModel>({
  name: 'usuarios',
  defaults
})
@Injectable()
export class UsuariosState {
  constructor(private readonly usuServi :UsuarioService){}

  @Selector()
  public static getListUsuarios({usuarios}:UsuariosStateModel): NuevoUsuarioVO[]{
    return usuarios
  }

  @Selector()
  public static usuarioSeleccionado({usuarioSelecccionado}): NuevoUsuarioVO[]{
    return usuarioSelecccionado
  }

  @Action(AddUsuario)
  add({ getState, setState }: StateContext<UsuariosStateModel>, { payload }: AddUsuario) 
  : Observable<NuevoUsuarioVO>{
    return this.usuServi.add(payload).pipe(
      tap(
        (usu : NuevoUsuarioVO) =>{
          const state = getState();
          setState({
             usuarios: [...state.usuarios]
          })
        }
      )
    )
  }
}
