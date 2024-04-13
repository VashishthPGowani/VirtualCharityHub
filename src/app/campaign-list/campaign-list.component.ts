import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CampaignService } from '../services/campaign.service';
import { EncryptionService } from '../services/encryption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns:any;
  status = 1;
  imagePath:string;

  constructor(private campaignService:CampaignService,
    private router:Router,private encryptionService:EncryptionService) { }

  ngOnInit(): void {
    this.imagePath = environment.apiUrl ;
    this.GetCampaigns();
  }

  GotoMoreDetails(campaignId:string) {
    const encryptedcampaignId = this.encryptionService.encrypt(campaignId.toString(), 'cids');  
    this.router.navigate(['/campaign-detail'], {queryParams: {campaignId:encryptedcampaignId}});
   }

   GotoDonate(charityId:number) {
    const encryptedCharityId = this.encryptionService.encrypt(
      charityId.toString(),
      'cids'
    );
    this.router.navigate(['/donor/donate'], {
      queryParams: { charityId: encryptedCharityId },
    });
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
