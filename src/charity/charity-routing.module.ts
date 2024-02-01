import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityDashboardComponent } from './charity-dashboard/charity-dashboard.component';
import { OtherCharitiesComponent } from './other-charities/other-charities.component';
import { MyCharitySettingsComponent } from './my-charity-settings/my-charity-settings.component';

const routes: Routes = [
  { path: '', component:CharityDashboardComponent},
  { path: 'otherCharities', component:OtherCharitiesComponent},
  { path: 'MyCharitySettings', component:MyCharitySettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharityRoutingModule { }
