import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  constructor(private userService:UserService,
    private router:Router,
    private encryptionService:EncryptionService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(userId:number)
  {
    const confimed = confirm('Are you sure you want to delete this user?');
    if (confimed == true) {      
    this.userService.deleteUser(userId).subscribe({
      next: (response:any) => {  
        Swal.fire('success','user deleted successfully','success');      
       this.getUsers();
      },
      error: (error:any) => {
        Swal.fire('error','internal error','error');
      },
      complete: () => {
     
      }
    })
  }
  }

  goToEdit(userId:string)
  {
    const encryptedUserId = this.encryptionService.encrypt(userId,'usdi');
    this.router.navigate(['/admin/users/edit'], {queryParams: {userId:encryptedUserId}});
  }

  getUsers(){
    this.userService.getAllUsers().subscribe({
      next: (response:any) => {        
        this.users = response;
      },
      error: (error:any) => {
        Swal.fire('error','internal error','error');
      },
      complete: () => {
     
      }
    })
  }

}
