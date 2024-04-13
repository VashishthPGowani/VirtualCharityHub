import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService } from 'src/app/services/campaign.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css'],
})
export class CampaignFormComponent implements OnInit {
  formData: FormData = new FormData();
  loginDetails: any;

  constructor(
    private userService: UserService,
    private campaignService: CampaignService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
  }

  onSubmit() {
    const campaignName: any = document.getElementById('campaignName');
    const campaignDescription: any = document.getElementById(
      'campaignDescription'
    );
    const campaignImage: any = document.getElementById('campaignImage');
    const campaignAmount: any = document.getElementById('campaignAmount');

    this.formData.append('CampaignName', campaignName.value);
    this.formData.append(
      'CampaignDescription',
      campaignDescription.value
    );
    this.formData.append('CampaignAmount', campaignAmount.value);
    this.formData.append('CampaignImage', campaignImage.files[0]);
    this.formData.append('CharityId', this.loginDetails.CharityId);
    this.CreateCampaign();
  }

  CreateCampaign() {
    this.campaignService.createCampaign(this.formData).subscribe({
      next: (response: any) => {
        Swal.fire('success', 'campaign created successfully!', 'success');
        this.router.navigate(['campaign-list']);
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }
}
