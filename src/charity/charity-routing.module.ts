import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityDashboardComponent } from './charity-dashboard/charity-dashboard.component';
import { OtherCharitiesComponent } from './other-charities/other-charities.component';
import { MyCharitySettingsComponent } from './my-charity-settings/my-charity-settings.component';
import { MyCampagineListComponent } from './my-campagine-list/my-campagine-list.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';

const routes: Routes = [
  { path: '', component:CharityDashboardComponent},
  { path: 'dashboard', component: CharityDashboardComponent },
  { path: 'otherCharities', component:OtherCharitiesComponent},
  { path: 'MyCharitySettings', component:MyCharitySettingsComponent},
  { path: 'CampaginList', component:MyCampagineListComponent},
  { path: 'AddCampagin', component:CampaignFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharityRoutingModule { }
