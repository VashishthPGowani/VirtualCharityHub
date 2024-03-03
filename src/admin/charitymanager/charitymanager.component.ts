import { Component, OnInit } from '@angular/core';
import { CharityService } from 'src/app/services/charity.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-charitymanager',
  templateUrl: './charitymanager.component.html',
  styleUrls: ['./charitymanager.component.css']
})
export class CharitymanagerComponent implements OnInit {
  charities:any;
  formdata: FormData  = new FormData();

  constructor(private charityService:CharityService) { }

  ngOnInit(): void {
    this.GetCharities();
  }

  GetCharities()
  {
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

  ApproveorDenyCharitiy(charityId: string,action:string)
  {
    var confirmed = confirm('Are you sure you want to ' + action + ' this charity?');
    if (confirmed === true) {
      this.formdata.append('charityId',charityId);
      this.formdata.append('action',action);
      this.charityService.approveOrRejectCharity(this.formdata).subscribe({
        next: (response:any) => {
         Swal.fire('success',response.message,'success');
         this.GetCharities();
        },
        error: (error) => {
        Swal.fire('error','internal error','error');
        },
        complete: () => {
       
        }
      })
    }  
  }
}
