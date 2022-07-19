import { CardTablasComponent } from './cards/card-tablas/card-tablas.component';


import { TablaPadreComponent } from './tablas/tabla-padre.component';


import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './inicio/header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroComponent } from './auth/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../utils/material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './inicio/footer/footer.component';
import { CardProductsComponent } from './cards/card-products/card-products.component';




@NgModule({
  declarations: [ 
     HeaderComponent,
     FooterComponent,
     LoginComponent,
     TablaPadreComponent,
     RegistroComponent,
     CardProductsComponent,
     CardTablasComponent
     
    ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
    FormsModule,
    TranslateModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TablaPadreComponent,
    RegistroComponent,
    TranslateModule,
    CardProductsComponent,
    CardTablasComponent
   
  ]
})
export class ComponentesModule { }
