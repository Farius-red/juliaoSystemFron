import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validaciones } from 'src/app/utils/validators';

@Injectable({
  providedIn: 'root'
})
export class FormsAuthService {

  constructor(private formb: FormBuilder) { }

  buildFormRegister(form: FormGroup){
    return form = this.formb.group({
       email: ['',[Validators.required , Validators.email, Validators.pattern(Validaciones.emailfilter)]], 
       password: ['',[Validators.required, Validators.minLength(6)], Validaciones.validPassword],
       confirmPassword: ['',[ Validators.required ,Validators.minLength(6)]], 
       telefono: ['',[Validators.required, Validators.pattern(Validaciones.validTel)]], 
       nombres: ['', [Validators.required, Validators.minLength(3),  Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]+$/)]],
       apellidos: ['', [Validators.required, Validators.minLength(4) ,Validators.maxLength(20), Validators.pattern(/^[a-zA-Z ]+$/)] ], 

  },
  {validations:Validaciones.matchPasswords})
 }

}
