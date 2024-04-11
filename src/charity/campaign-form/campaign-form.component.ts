import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})
export class CampaignFormComponent implements OnInit {
  formData: FormData = new FormData();
  loginDetails:any;

  constructor(    private userService:UserService,
    ) { }

  ngOnInit(): void {
    this.loginDetails = this.userService.getUserDetails();
  }

  onSubmit()
  {
    const campaignName : any = document.getElementById('campaignName');
    const campaignDescription : any = document.getElementById('campaignDescription');
    const campaignImage : any = document.getElementById('campaignImage');
    const campaignAmount : any = document.getElementById('campaignAmount');

    this.formData.append('CampaignName', campaignName.textContent);
    this.formData.append('CampaignDescription', campaignDescription.textContent);
    this.formData.append('CampaignAmount', campaignAmount.textContent);
    this.formData.append('CampaignImage', campaignImage.files[0]);
    this.formData.append('CharityId', '');
  }
  

}
