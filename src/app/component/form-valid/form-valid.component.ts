import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-valid',
  imports: [ReactiveFormsModule],
  templateUrl: './form-valid.component.html',
  styleUrl: './form-valid.component.css'
})
export class FormValidComponent {

  userlogForm:FormGroup =new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.minLength(8)]),
    compassword: new FormControl("",[Validators.minLength(8)]),
    isclicked:new FormControl(false)
  })

  submith(){
    const value = this.userlogForm.value;
    debugger;
  }

}
