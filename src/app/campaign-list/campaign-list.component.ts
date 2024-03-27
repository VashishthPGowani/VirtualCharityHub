import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns:any;
  status = 1;
  imagePath:string;

  constructor(private campaignService:CampaignService) { }

  ngOnInit(): void {
    this.imagePath = environment.apiUrl + '/uploads/images/';
    this.GetCampaigns();
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
