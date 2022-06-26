import { Component } from '@angular/core';
import {  TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate : TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.setDefaultLang('es');
      this.translate.addLangs(["es","en"]);
      this.translate.use('es');
    this.translate.use('es');
    this.translate.get('lenguage').subscribe(res=>{
      console.log(res);
    })
  }
}
