import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) { }
  
    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        password: ['', Validators.required],
      });
    }
  
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
  
    onSubmit() {
      // do something with the form data
      console.log(this.registerForm.value);
    }
  }
