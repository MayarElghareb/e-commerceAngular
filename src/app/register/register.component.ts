import { Component, OnInit } from '@angular/core';
import { PasswordValidation } from './PasswordValidation';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private fb: FormBuilder) {
    
  }
  

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      published: true,
      credentials: this.fb.array([
        
       ]),
       
      registerName: [
        '',
        [ Validators.required,
          Validators.minLength(3)],
      ],
      registerEmail: ['', [ Validators.required,
        Validators.email]],

         registerUser: ['', [   Validators.required,
          Validators.pattern('/^\S/')]] ,
          password: ['', [ Validators.required,
            Validators.minLength(8),
            Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)')]] ,
            confirmPassword: ['', [Validators.required]],
           

    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  }

    
  addCreds():void {
    const creds = this.registerForm.controls.credentials as FormArray;
    creds.push(this.fb.group({
      address: ['', [ Validators.required , Validators.pattern('[a-zA-Z]/g')
        ]],
        country:['', [ Validators.required , Validators.pattern('[a-zA-Z]/g')]],
      city:['', [ Validators.required , Validators.pattern('[a-zA-Z]/g')
        ]],
      street: ['', [ Validators.required , Validators.pattern('[a-zA-Z]/g')
       ]],
     
    }));
  }




  //   this.registerForm = new FormGroup({
  //     registerName: new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(3)
      
  //     ]),
  //     registerEmail: new FormControl(null, [
  //       Validators.required,
  //       Validators.email
  //     ]),
      
  //     registerUser: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern('/^\S/'),
        
  //     ]),
  //     password: new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(8),
  //       Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)'),
       

        
  //     ]),
      
      
  //   });
  // }
  submitReactiveForm() {
    console.log(this.registerForm);
  }
  get registerFormControls() {
    return this.registerForm.controls;
  }
}


