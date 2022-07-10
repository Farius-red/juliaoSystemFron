import { ComponentesModule } from './componentes/componentes.module';

import { UsuariosState } from './../state/usuarios.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './utils/material/material.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    NgxsModule.forRoot([UsuariosState]),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule,
   BrowserAnimationsModule,
   MaterialModule,
   ComponentesModule
  ],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   // { provide: HTTP_INTERCEPTORS,useClass: InterceptorService,multi:true }
  ],
  exports:[
    TranslateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
