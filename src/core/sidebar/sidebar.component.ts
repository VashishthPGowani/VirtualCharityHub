import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loginDetails: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
  }

}
