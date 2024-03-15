import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharityService } from 'src/app/services/charity.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-charitymanager',
  templateUrl: './charitymanager.component.html',
  styleUrls: ['./charitymanager.component.css'],
})
export class CharitymanagerComponent implements OnInit {
  charities: any;
  imagePath:string;
  formdata: FormData = new FormData();
  status: number = 0;

  constructor(
    private charityService: CharityService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.imagePath = environment.apiUrl + '/uploads/images/';
    this.GetStatus();
    if (this.status == 0) {
      this.GetPendingCharities();
    } else {
      this.GetCharities();
    }
  }

  GetStatus() {
    this.status = this.activatedRoute.snapshot.params['status'];
  }

  GetCharities() {
    this.charityService.getCharities().subscribe({
      next: (response: any) => {
        this.charities = response;
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }

  GetPendingCharities() {
    this.charityService.getCharities(0).subscribe({
      next: (response: any) => {
        this.charities = response;
      },
      error: (error) => {
        Swal.fire('error', 'internal error', 'error');
      },
      complete: () => {},
    });
  }

  ApproveorDenyCharitiy(charityId: string, action: string) {
    var confirmed = confirm(
      'Are you sure you want to ' + action + ' this charity?'
    );
    if (confirmed === true) {
      this.formdata.append('charityId', charityId);
      this.formdata.append('action', action);
      this.charityService.approveOrRejectCharity(this.formdata).subscribe({
        next: (response: any) => {
          Swal.fire('success', response.message, 'success');
          if (this.status == 0) {
            this.GetPendingCharities();
          } else {
            this.GetCharities();
          }
        },
        error: (error) => {
          Swal.fire('error', 'internal error', 'error');
        },
        complete: () => {},
      });
    }
  }

  SuspendUnsuspendCharity(charityId: string, action: string) {
    var confirmed = confirm(
      'Are you sure you want to ' + action + ' this charity?'
    );
    if (confirmed === true) {
      this.formdata.append('charityId', charityId);
      this.formdata.append('action', action);
      this.charityService.SuspendorUnsCharity(this.formdata).subscribe({
        next: (response: any) => {
          Swal.fire('success', response.message, 'success');
          if (this.status == 0) {
            this.GetPendingCharities();
          } else {
            this.GetCharities();
          }
        },
        error: (error) => {
          Swal.fire('error', 'internal error', 'error');
        },
        complete: () => {},
      });
    }
  }
}
