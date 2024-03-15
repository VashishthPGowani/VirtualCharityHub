import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { CampaignService } from '../services/campaign.service';

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

  constructor(private charityService:CharityService,
    private campaignService:CampaignService
    ) { }

  ngOnInit(): void {
    this.imagePath = environment.apiUrl + '/uploads/images/';
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
