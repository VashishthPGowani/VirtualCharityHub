import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-charity-register',
  templateUrl: './charity-register.component.html',
  styleUrls: ['./charity-register.component.css']
})
export class CharityRegisterComponent implements OnInit {
  registerForm: FormGroup;
  formData: FormData = new FormData();

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', Validators.required],
      image: [''],
      document: [''],
      location: [''],
      description: ['']
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.formData.append('name', this.f['name'].value);
    this.formData.append('email', this.f['email'].value);
    this.formData.append('password', this.f['password'].value);
    this.formData.append('phone', this.f['phone'].value);
    this.formData.append('role', 'Charity');
    this.formData.append('image', this.f['image'].value);
    this.formData.append('document', this.f['document'].value);
    this.formData.append('location', this.f['location'].value);
    this.formData.append('description', this.f['description'].value);

    this.registerCharity();
  }

  registerCharity() {
    this.userService.Register(this.formData).subscribe({
      next: (response: any) => {
        location.href = '/login';
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {
        // Additional actions after registration completes
      }
    });
  }
}
