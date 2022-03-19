import { TablaPadreComponent } from './tablas/tabla-padre.component';


import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../utils/material/material.module';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [ 
     HeaderComponent,
     FooterComponent,
     LoginComponent,
     TablaPadreComponent,
     RegistroComponent,
    ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TablaPadreComponent,
    RegistroComponent,
  
  ]
})
export class ComponentesModule { }
