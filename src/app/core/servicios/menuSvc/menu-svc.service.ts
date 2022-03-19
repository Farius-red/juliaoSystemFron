import { MenuModel } from './../../modelos/menu.Model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuSvcService {

  constructor(private http: HttpClient) { }

  getMenu(){

    return this.http.get<MenuModel[]>('/assets/data/menu-opts.json');
  }
}
