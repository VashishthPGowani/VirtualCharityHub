import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getCampaigns(status?: number,campaignId?:number,charityId?:number) {
    if (status === undefined) {
      return this.http.get(environment.apiUrl + 'campaigns');
    } else {
      if(campaignId != undefined)
        {
          return this.http.get(environment.apiUrl + 'campaigns?status=' + status + '&id=' + campaignId);
        }
        if(charityId != undefined)
          {
            return this.http.get(environment.apiUrl + 'campaigns?status=' + status +  '&CharityId=' + charityId);
          }
        else
        {
          return this.http.get(environment.apiUrl + 'campaigns?status=' + status);
        }
    }
  }

  deleteCampaign(formData: FormData) {
    return this.http.post(environment.apiUrl + 'campaignDelete',formData);
  }

  approveOrRejectCampaign(formData: FormData) {
    return this.http.post(
      environment.apiUrl + 'campaignApproveReject.php',
      formData
    );
  }

  createCampaign(formData: FormData)
  {
    return this.http.post(
      environment.apiUrl + 'campaignCreate',
      formData
    );
  }

  SuspendorUnsuspendCampaign(formData: FormData) {
    return this.http.post(
      environment.apiUrl + 'campaignSuspend',
      formData
    );
  }
}
