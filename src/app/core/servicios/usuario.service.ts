import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { crudInterfase } from '../interfases/crud';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService  implements crudInterfase {
  
  add(modelo: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  get(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(modelo: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete(id: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

 
 
  
}
