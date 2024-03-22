import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Register(formData:FormData)
  {
    return this.http.post(environment.apiUrl + 'register', formData);
  }

  Login(formData:FormData)
  {
    return this.http.post(environment.apiUrl + 'login', formData);
  }

  getUserDetails()
  {
    let loginDetais:any = sessionStorage.getItem('userDetails');
    let user = JSON.parse(loginDetais); 
    return user;
  }

  getAllUsers()
  {
    return this.http.get(environment.apiUrl + 'users');
  }

  getUser(userId:number)
  {
    return this.http.get(environment.apiUrl + 'users?id=' + userId);
  }

  deleteUser(userId:number)
  {
    return this.http.delete(environment.apiUrl + 'users?id=' + userId);
  }

  addUser(formData:FormData)
  {
    return this.http.post(environment.apiUrl + 'users',formData);
  }

  updateUser(formData:FormData)
  {
    return this.http.put(environment.apiUrl + 'userUpdate',formData);
  }
}
