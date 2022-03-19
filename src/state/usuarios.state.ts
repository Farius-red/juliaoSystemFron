
import { NuevoUsuario } from './../app/core/modelos/Usuarios/nuevoUsuario.Model';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddUsuario } from './usuarios.actions';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

export class UsuariosStateModel {
  public usuarios: NuevoUsuario[]=[];
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
  public static getListUsuarios({usuarios}:UsuariosStateModel): NuevoUsuario[]{
    return usuarios
  }

  @Selector()
  public static usuarioSeleccionado({usuarioSelecccionado}): NuevoUsuario[]{
    return usuarioSelecccionado
  }

  @Action(AddUsuario)
  add({ getState, setState }: StateContext<UsuariosStateModel>, { payload }: AddUsuario) 
  : Observable<NuevoUsuario>{
    return this.usuServi.add(payload).pipe(
      tap(
        (usu : NuevoUsuario) =>{
          const state = getState();
          setState({
             usuarios: [...state.usuarios]
          })
        }
      )
    )
  }
}
