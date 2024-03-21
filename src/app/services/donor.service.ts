import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor(private http:HttpClient) { }

  donate(formData:FormData)
  {
    return this.http.post(environment.apiUrl + 'donate', formData);
  }
}
