import { MenuSvcService } from './../../core/servicios/menuSvc/menu-svc.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from 'src/app/core/modelos/menu.Model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  title: string = "admin";
  menuId:string ="admin";
  menu:Observable<MenuModel[]>
  constructor( private menuSvc : MenuSvcService) { }

  ngOnInit() {
    this.menu =this.menuSvc.getMenu()
  }

}
