import { Component, OnInit } from '@angular/core';
import { DonorService } from 'src/app/services/donor.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mydonations',
  templateUrl: './mydonations.component.html',
  styleUrls: ['./mydonations.component.css']
})
export class MydonationsComponent implements OnInit {
  loginDetails: any;
  donations:any;

  constructor(private userService:UserService,private donorService:DonorService) { }

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
    this.Getdonations();
  }

  Getdonations()
  {
    this.donorService.getDonations(this.loginDetails.Id).subscribe({
      next: (response:any) => {        
         this.donations = response;
      },
      error: (error:any) => {
        Swal.fire('error','internal error','error');
      },
      complete: () => {
     
      }
    })
  }

}
