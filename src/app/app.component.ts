import { MenuModel } from './core/modelos/menu/menu.Model';
import { MenuActive } from 'src/app/core/modelos/menu/menu.Model';
import { MenuState } from 'src/state/menu.state';
import { getMenu } from './../state/menu.actions';
import { Component } from '@angular/core';
import {  TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import {  Router } from '@angular/router';
import { Select,  Store } from '@ngxs/store';
import { Menu } from 'src/assets/utils/enums/menu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
keywords:string;
@Select(MenuState.getMenulist) menu$:Observable<MenuModel[]>;
menuId:string ="inicio";
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    
    private route : Router,
    private store : Store
                                       )
  { }


  ngOnInit(): void {
    this.verificarRutas(); 
    this.addMetas();
  }

 verificarRutas(){
  console.log(this.route.url);
  
    if(this.route.url == "/")
      this.store.dispatch(new getMenu(Menu.USER));
      this.menu$.subscribe(res=>{
        console.log(res);
      })
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