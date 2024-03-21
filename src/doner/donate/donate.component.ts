import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorService } from 'src/app/services/donor.service';
import { EncryptionService } from 'src/app/services/encryption.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  charityId: any;
  loginDetails: any;
  amount: number = 1;
  formData: FormData = new FormData();
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,
    private donorService:DonorService, private router:Router, private encryptionService:EncryptionService
    ) { }

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
    if(this.loginDetails != null && this.loginDetails != undefined)
    {
      this.formData.append('donorId', this.loginDetails.Id);
    }
    this.GetCharityId();
    if(this.charityId != null && this.charityId != undefined)
    {
      this.formData.append('charityId', this.charityId);
    }
  }

  GetCharityId()
  {
    const encryptedCharityId = this.activatedRoute.snapshot.queryParams['charityId'];
    this.charityId = this.encryptionService.decrypt(encryptedCharityId,'cids');
  }

  OnSubmit()
  {
    if(this.amount <= 0) {
      Swal.fire('error','amount must be greater than zero','error');
  }
  else
  {
    debugger
    this.formData.append('amount',this.amount.toString());
    this.formData.append('IsSuccess','1');
    this.donorService.donate(this.formData).subscribe({
      next: (response:any) => {
       Swal.fire('success','Payment successful','success');
      history.back();
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
