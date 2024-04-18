import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginDetails: any;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
  }

  logout() {
    sessionStorage.clear();
    location.href = '/login';
    }

}
