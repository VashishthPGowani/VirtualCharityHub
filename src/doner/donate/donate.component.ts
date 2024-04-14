import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeCardComponent, StripePaymentElementComponent, StripeService } from 'ngx-stripe';
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
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  amount: number = 1;
  paymentElement!: StripePaymentElementComponent;
  formData: FormData = new FormData();
  formDatacharge: FormData = new FormData();

  cardOptions: StripeCardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        iconColor: '#000000',
        color: '#000000',
        fontWeight: '700',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: '#000000',
        },
      },
    },
  };
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    appearance: {
      theme: 'flat',
    },
  };

  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private stripeService:StripeService,
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
createDonationToDb()
{
  this.donorService.donate(this.formData).subscribe({
    next: (response:any) => {
    },
    error: (error) => {
    Swal.fire('error','internal error','error');
    },
    complete: () => {
   
    }
  })
}
createChargestripe(){
this.donorService.createCharge(this.formDatacharge).subscribe({
  next: (response:any) => {
    this.createDonationToDb();
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

  OnSubmit()
  {
    if(this.amount <= 0) {
      Swal.fire('error','amount must be greater than zero','error');
  }
  else
  {
    this.formData.append('amount',this.amount.toString());
    this.formData.append('IsSuccess','1');
    const name = this.loginDetails.Name;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          
          this.formDatacharge.append('amount',this.amount.toString());
          this.formDatacharge.append('token',result.token.id);
          this.createChargestripe();
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
      
   
  }
}

}
