import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  charities:any;

  constructor(private charityService:CharityService) { }

  ngOnInit(): void {
    this.GetCharities();
  }

  GetCharities()
  {
    debugger
    this.charityService.getCharities().subscribe({
      next: (response:any) => {
       this.charities = response;
      },
      error: (error) => {
      Swal.fire('error','internal error','error');
      },
      complete: () => {
     
      }
    })
  }

}
