import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    formData:FormData = new FormData();
    loginForm: FormGroup;

  constructor(private fb:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.IntializeLoginForm();
  }

  IntializeLoginForm()
  {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  get f()
  {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.formData.append('email',this.f['email'].value);
    this.formData.append('password',this.f['password'].value);
    this.loginUser();
}

  loginUser() {
    this.userService.Login(this.formData).subscribe({
      next: (response:any) => {        
          sessionStorage.setItem("userDetails",JSON.stringify(response.user));
          location.href = '/';
      },
      error: (error:any) => {
        Swal.fire('error','internal error','error');
      },
      complete: () => {
     
      }
    })
     }

}
