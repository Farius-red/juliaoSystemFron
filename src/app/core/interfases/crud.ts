import { Observable } from "rxjs";

export  interface crudInterfase{

   add(modelo):Observable<any>;
   get():Observable<any>;
   update(modelo):Observable<any>;
   delete(id):Observable<any>;


}