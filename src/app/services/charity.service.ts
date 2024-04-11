import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharityService {
  constructor(private http: HttpClient) {}

  getCharities(status?: number,charityId?:string) {
    if(status === undefined && charityId === undefined) 
    {
      return this.http.get(environment.apiUrl + 'charities');      
    }
    else if(status != undefined && charityId != undefined)
    {
      return this.http.get(environment.apiUrl + 'charities?status=' + status + '&CharityId=' + charityId);
    }
    else if(status != undefined && charityId === undefined)
      {
      return this.http.get(environment.apiUrl + 'charities?status=' + status);
      }
      else
      {
      return this.http.get(environment.apiUrl + 'charities?CharityId=' + charityId);
      }
  }

  approveOrRejectCharity(formData: FormData) {
    return this.http.post(
      environment.apiUrl + 'charityApproveReject',
      formData
    );
  }

  createCharity(formData: FormData) {
    return this.http.post(
      environment.apiUrl + 'charityCreate',
      formData
    );
  }

  SuspendorUnsCharity(formData: FormData) {
    return this.http.post(
      environment.apiUrl + 'charitySuspend',
      formData
    );
  }
}
