import { Component } from '@angular/core';
import {  TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { MenuSvcService } from './core/servicios/menuSvc/menu-svc.service';
import { Observable } from 'rxjs';
import { MenuModel } from './core/modelos/menu/menu.Model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
keywords:string;
menu:Observable<MenuModel[]>
menuId:string ="inicio";
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private  menuSvc: MenuSvcService,
    private route : Router
                                       )
  { }


  ngOnInit(): void {
    this.menu =this.menuSvc.getMenu()

    this.verificarRutas(); 
    this.addMetas();
  }

 verificarRutas(){
   console.log(this.route.url)
 }

  addMetas(){
    this.translateService.stream("meta_key_words.title").subscribe(res  => this.titleService.setTitle(res)); 
   this.translateService.stream("meta_key_words.keywords").subscribe(r=> {
     if(r != "meta_key_words.keywords")
      this.metaService.addTag({name: 'keywords', content: `${r}`});
    });

    this.translateService.stream("meta_key_words.description").subscribe(r=> {
      if(r != "meta_key_words.description")
       this.metaService.addTag({name: 'description', content: `${r}`});
     });

    this.metaService.addTag({name: 'robots', content: 'index, follow'});
  }
  configLangs() {
    // Add languages
    this.translateService.addLangs(['en', 'es']);
    // Buscar si el navegador informa el idioma
    console.log(this.translateService.getBrowserLang());
    if (this.translateService.getBrowserLang() == 'en') {
       this.translateService.use('en');
     } else if (this.translateService.getBrowserLang() == 'es') {
       this.translateService.use('es');
     } else {
       this.translateService.use('en');
          }
      }
}