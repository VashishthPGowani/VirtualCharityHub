import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  constructor(private http: HttpClient) {}

  getCampaigns(status?: number) {
    if (status === undefined) {
      return this.http.get(environment.apiUrl + 'campaigns');
    } else {
      return this.http.get(environment.apiUrl + 'campaigns?status=' + status);
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

  SuspendorUnsuspendCampaign(formData: FormData) {
    return this.http.post(
      environment.apiUrl + 'campaignSuspend',
      formData
    );
  }
}
