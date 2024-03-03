import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  constructor(private http:HttpClient) { }

  getCharities()
  {
    return this.http.get(environment.apiUrl + 'charities');
  }

  approveOrRejectCharity(formData:FormData)
  {
    return this.http.post(environment.apiUrl + 'charityApproveReject',formData);
  }
}
