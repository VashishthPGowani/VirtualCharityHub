import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionService } from '../services/encryption.service';
import { UserService } from '../services/user.service';
import { CharityService } from '../services/charity.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-charitydetail',
  templateUrl: './charitydetail.component.html',
  styleUrls: ['./charitydetail.component.css'],
})
export class CharitydetailComponent implements OnInit {
  imagePath:string;
  charityId: any;
  loginDetails: any;
  status = 1;
  charity: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private charityService: CharityService,
    private userService: UserService,
    private router: Router,
    private encryptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
    this.imagePath = environment.apiUrl;
    this.GetCharityId();
    if (this.charityId != null && this.charityId != undefined) {
      this.GetCharity();
    }
  }

  GotoDonate() {
    const encryptedCharityId = this.encryptionService.encrypt(
      this.charityId.toString(),
      'cids'
    );
    this.router.navigate(['/donor/donate'], {
      queryParams: { charityId: encryptedCharityId },
    });
  }

  GetCharityId() {
    const encryptedCharityId =
      this.activatedRoute.snapshot.queryParams['charityId'];
    this.charityId = this.encryptionService.decrypt(encryptedCharityId, 'cids');
  }

  GetCharity() {
    this.charityService.getCharities(this.status, +this.charityId).subscribe({
      next: (response: any) => {
        debugger
        this.charity = response;
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }
}
