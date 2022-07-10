import { MenuSvcService } from './../../core/servicios/menuSvc/menu-svc.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from 'src/app/core/modelos/menu.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  title: string = "admin";
  menuId:string ="inicio";
  menu:Observable<MenuModel[]>
  constructor( 
    private menuSvc : MenuSvcService,
    private route: Router
    ) { }

  ngOnInit() {
    this.menu =this.menuSvc.getMenu()
    this.verificarRutas();
  }

  verificarRutas(){
    console.log(this.route.url)
  }
}
