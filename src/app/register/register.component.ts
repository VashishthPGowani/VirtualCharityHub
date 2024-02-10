import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    formData:FormData = new FormData();
  
    constructor(private formBuilder: FormBuilder,private userService:UserService) { }
  
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
      debugger
        this.formData.append('name',this.f['name'].value);
        this.formData.append('email',this.f['email'].value);
        this.formData.append('password',this.f['password'].value);
        this.formData.append('phone',this.f['phone'].value);
        this.formData.append('role','Donor');
        this.registerUser();
    }

    registerUser() {
      this.userService.Register(this.formData).subscribe({
        next: (response) => {
         alert("user registration successful");
        },
        error: (error) => {
          alert("user registration failed");
        },
        complete: () => {
       
        }
      })
       }
}
