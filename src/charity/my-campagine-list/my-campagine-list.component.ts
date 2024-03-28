import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from 'src/app/services/campaign.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-campagine-list',
  templateUrl: './my-campagine-list.component.html',
  styleUrls: ['./my-campagine-list.component.css']
})
export class MyCampagineListComponent implements OnInit {

  campaigns: any;
  formdata: FormData = new FormData();
  status: number = 0;
  imagePath: string;

  constructor(
    private campaignService: CampaignService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.imagePath = environment.apiUrl + '/uploads/images/';
    this.GetStatus();
    if (this.status == 0) {
      this.GetPendingCampaigns();
    } else {
      this.GetCampaigns();
    }
  }

  GetStatus() {
    this.status = this.activatedRoute.snapshot.params['status'];
  }

  GetCampaigns() {
    this.campaignService.getCampaigns().subscribe({
      next: (response: any) => {
        this.campaigns = response;
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }

  ApproveorDenyCampaign(campaignId: string, action: string) {
    var confirmed = confirm(
      'Are you sure you want to ' + action + ' this campaign?'
    );
    if (confirmed === true) {
      this.formdata.append('campaignId', campaignId);
      this.formdata.append('action', action);
      this.campaignService.approveOrRejectCampaign(this.formdata).subscribe({
        next: (response: any) => {
          Swal.fire('success', response.message, 'success');
          if (this.status == 0) {
            this.GetPendingCampaigns();
          } else {
            this.GetCampaigns();
          }
        },
        error: (error) => {
          Swal.fire('error', 'internal error', 'error');
        },
        complete: () => {},
      });
    }
  }

  SuspendorUnsuspendCampaign(campaignId: string, action: string) {
    var confirmed = confirm(
      'Are you sure you want to ' + action + ' this campaign?'
    );
    if (confirmed === true) {
      this.formdata.append('campaignId', campaignId);
      this.formdata.append('action', action);
      this.campaignService.SuspendorUnsuspendCampaign(this.formdata).subscribe({
        next: (response: any) => {
          Swal.fire('success', response.message, 'success');
          if (this.status == 0) {
            this.GetPendingCampaigns();
          } else {
            this.GetCampaigns();
          }
        },
        error: (error) => {
          Swal.fire('error', 'internal error', 'error');
        },
        complete: () => {},
      });
    }
  }

  deleteCampaign(campaignId:string){
    var confirmed = confirm('Are you sure you want to delete this campaign');
    if(confirmed === true){
    this.formdata.append('campaignId', campaignId);
    this.campaignService.deleteCampaign(this.formdata).subscribe({
      next: (response: any) => {
        Swal.fire('success', 'campaign deleted successfully', 'success');
        if(this.status == 0)
        {
          this.GetPendingCampaigns();
        }
        else
        {
          this.GetCampaigns();
        }
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }
  }

  GetPendingCampaigns() {
    this.campaignService.getCampaigns(0).subscribe({
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
