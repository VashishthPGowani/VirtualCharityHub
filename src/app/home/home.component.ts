import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { CampaignService } from '../services/campaign.service';
import { UserService } from '../services/user.service';
import { EncryptionService } from '../services/encryption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  charities:any;
  campaigns:any;
  status = 1;
  imagePath:string;
  loginDetails: any;

  constructor(private charityService:CharityService,
    private campaignService:CampaignService,
    private encryptionService:EncryptionService,
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
    this.imagePath = environment.apiUrl ;
    this.GetCharities();
    this.GetCampaigns();
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

  GotoDonate(CharityId:string) {
   const encryptedCharityId = this.encryptionService.encrypt(CharityId.toString(), 'cids');  
   this.router.navigate(['/donor/donate'], {queryParams: {charityId:encryptedCharityId}});
  }

  GetCampaigns()
  {
    this.campaignService.getCampaigns(this.status).subscribe({
      next: (response:any) => {
       this.campaigns = response;
      },
      error: (error) => {
      Swal.fire('error','internal error','error');
      },
      complete: () => {
     
      }
    })
  }

}
