import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CharityService } from '../services/charity.service';
import { EncryptionService } from '../services/encryption.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.css']
})
export class CharityListComponent implements OnInit {
  charities:any;
  imagePath:string;
  loginDetails: any;
  status = 1;

  constructor(private charityService:CharityService,
    private userService:UserService,
    private encryptionService:EncryptionService,private router:Router) { }

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
    this.imagePath = environment.apiUrl;
    this.GetCharities();
  }

  GotoMoreDetails(CharityId:string) {
    const encryptedCharityId = this.encryptionService.encrypt(CharityId.toString(), 'cids');  
    this.router.navigate(['/charity-detail'], {queryParams: {charityId:encryptedCharityId}});
   }

  GotoDonate(CharityId:string) {
    const encryptedCharityId = this.encryptionService.encrypt(CharityId.toString(), 'cids');  
    this.router.navigate(['/donor/donate'], {queryParams: {charityId:encryptedCharityId}});
   }

  GetCharities()
  {
    this.charityService.getCharities(this.status).subscribe({
      next: (response:any) => {
       this.charities = response;
      },
      error: (error) => {
      Swal.fire('error','internal error','error');
      },
      complete: () => {
     
      }
    })
  }



}
