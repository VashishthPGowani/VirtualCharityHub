import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { CharityService } from 'src/app/services/charity.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  charities:any;
  campaigns:any;

  constructor(private charityService:CharityService,
    private campaignService:CampaignService) { }

  ngOnInit(): void {
    this.GetCharities();
    this.GetCampaigns();
  }

  GetCharities()
  {
    this.charityService.getCharities().subscribe({
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
    this.campaignService.getCampaigns().subscribe({
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
