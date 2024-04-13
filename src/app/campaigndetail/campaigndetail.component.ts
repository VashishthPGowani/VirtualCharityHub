import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CharityService } from '../services/charity.service';
import { EncryptionService } from '../services/encryption.service';
import { UserService } from '../services/user.service';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-campaigndetail',
  templateUrl: './campaigndetail.component.html',
  styleUrls: ['./campaigndetail.component.css']
})
export class CampaigndetailComponent {
  imagePath:string;
  campaignId: any;
  loginDetails: any;
  status = 1;
  campaign: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private campaignService: CampaignService,
    private userService: UserService,
    private router: Router,
    private encryptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
    this.imagePath = environment.apiUrl;
    this.GetCampaignId();
    if (this.campaignId != null && this.campaignId != undefined) {
      this.GetCampaign();
    }
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

  GetCampaignId() {
    const encryptedCharityId =
      this.activatedRoute.snapshot.queryParams['campaignId'];
    this.campaignId = this.encryptionService.decrypt(encryptedCharityId, 'cids');
  }

  GetCampaign() {
    this.campaignService.getCampaigns(this.status, +this.campaignId).subscribe({
      next: (response: any) => {
        this.campaign = response;
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }


}
