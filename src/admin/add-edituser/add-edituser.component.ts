import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edituser',
  templateUrl: './add-edituser.component.html',
  styleUrls: ['./add-edituser.component.css'],
})
export class AddEdituserComponent implements OnInit {
  title: string;
  UserForm: FormGroup;
  userId: number;
  formData: FormData = new FormData();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private encryptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.getUserId();
    this.IntializeUserForm();
    if (this.userId != undefined && this.userId != null) {
      this.title = 'Edit user';
      this.getUser();
    } else {
      this.title = 'Add user';
    }
  }

  IntializeUserForm() {
    this.UserForm = this.fb.group({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Name: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      Role: new FormControl('', Validators.required),
      Phone: new FormControl(''),
    });
  }

  get f() {
    return this.UserForm.controls;
  }

  getUserId() {
    const encryptedUserId = this.activatedRoute.snapshot.queryParams['userId'];
    if (encryptedUserId != undefined && encryptedUserId != null) {
      this.userId = +this.encryptionService.decrypt(encryptedUserId, 'usdi');
    }
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe({
      next: (response: any) => {
        this.UserForm.patchValue(response);
      },
      error: (error: any) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }

  onSubmit() {
    if (this.userId != null && this.userId != undefined) {
      this.formData.append('Email', this.f['Email'].value);
      this.formData.append('Password', this.f['Password'].value);
      this.formData.append('Name', this.f['Name'].value);
      this.formData.append('Role', this.f['Role'].value);
      this.formData.append('Phone', this.f['Phone'].value);
      this.formData.append('Id', this.userId.toString());
      this.updateUser();
    } else {
      this.formData.append('email', this.f['Email'].value);
      this.formData.append('password', this.f['Password'].value);
      this.formData.append('name', this.f['Name'].value);
      this.formData.append('role', this.f['Role'].value);
      this.formData.append('phone', this.f['Phone'].value);
      this.createUser();
    }
  }

  createUser() {
    this.userService.addUser(this.formData).subscribe({
      next: (response: any) => {
        Swal.fire('success', 'user added successfully', 'success');
        this.router.navigate(['/admin/users']);
      },
      error: (error: any) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }

  updateUser() {
    this.userService.updateUser(this.formData).subscribe({
      next: (response: any) => {
        Swal.fire('success', 'user updated successfully', 'success');
        this.router.navigate(['/admin/users']);
      },
      error: (error: any) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }
}
