import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { CharityService } from '../services/charity.service';

@Component({
  selector: 'app-charity-register',
  templateUrl: './charity-register.component.html',
  styleUrls: ['./charity-register.component.css'],
})
export class CharityRegisterComponent implements OnInit {
  registerForm: FormGroup;
  formData: FormData = new FormData();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private charityService: CharityService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', Validators.required],
      image: [''],
      document: ['', Validators.required],
      location: [''],
      description: [''],
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.formData.append('name', this.f['name'].value);
    this.formData.append('email', this.f['email'].value);
    this.formData.append('password', this.f['password'].value);
    this.formData.append('phone', this.f['phone'].value);
    this.formData.append('role', 'Charity');
    this.registerUser();
  }

  registerUser() {
    this.userService.Register(this.formData).subscribe({
      next: (response: any) => {
        this.formData = new FormData();
        const charityImage : any = document.getElementById('image');
        const documentUpload : any = document.getElementById('document');
        this.formData.append('CharityImage', charityImage.files[0]);
        this.formData.append('CharityDocument', documentUpload.files);
        this.formData.append('CharityLocation', this.f['location'].value);
        this.formData.append('CharityName', this.f['name'].value);
        this.formData.append('CharityDescription', this.f['description'].value);
        this.formData.append('UserId', response.userId);
        this.createCharity();
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {
        // Additional actions after registration completes
      },
    });
  }

  createCharity() {
    this.charityService.createCharity(this.formData).subscribe({
      next: (response: any) => {
        location.href = '/login';
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {
        // Additional actions after registration completes
      },
    });
  }
}
