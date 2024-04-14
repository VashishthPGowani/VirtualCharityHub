import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from 'src/app/services/campaign.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-campagine-list',
  templateUrl: './my-campagine-list.component.html',
  styleUrls: ['./my-campagine-list.component.css'],
})
export class MyCampagineListComponent implements OnInit {
  campaigns: any;
  status = 1;
  loginDetails: any;
  imagePath: string;

  constructor(
    private campaignService: CampaignService,
    private userService:UserService
  ) {}
  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
    this.imagePath = environment.apiUrl;
    this.GetCampaigns();
  }

  GetCampaigns() {
    this.campaignService.getCampaigns(this.status,undefined,this.loginDetails.CharityId).subscribe({
      next: (response: any) => {
        this.campaigns = response;
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }
}
