import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})
export class CampaignFormComponent implements OnInit {
  formData: FormData = new FormData();

  constructor() { }

  ngOnInit(): void {
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
