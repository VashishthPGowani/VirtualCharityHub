import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CharityService } from '../services/charity.service';


@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.css']
})
export class CharityListComponent implements OnInit {
  charities:any;
  imagePath:string;
  status = 1;

  constructor(private charityService:CharityService) { }

  ngOnInit(): void {
    this.imagePath = environment.apiUrl + '/uploads/images/';
    this.GetCharities();
  }

  GetCharities()
  {
    this.charityService.getCharities(this.status).subscribe({
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
