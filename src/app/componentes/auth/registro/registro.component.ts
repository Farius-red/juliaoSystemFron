import { FormsAuthService } from './../../../core/servicios/formularios/forms-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

   formRegisterU: FormGroup;

  constructor(private formAuthSvc :FormsAuthService) {
    
   }

  ngOnInit() {
    this.buildForms();
  }

 buildForms(){
  this.formRegisterU =this.formAuthSvc.buildFormRegister(this.formRegisterU)
 }  

 registroU(){

 }
}
