import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http:HttpClient) { }

  getCampaigns()
  {
    return this.http.get(environment.apiUrl + 'campaigns');
  }
}
