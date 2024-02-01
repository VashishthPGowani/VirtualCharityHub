import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { DonerCharitiesComponent } from './doner-charities/doner-charities.component';
import { DonerSettingsComponent } from './doner-settings/doner-settings.component';

const routes: Routes = [
  { path: '', component:DonorHomeComponent},
  { path: 'charities', component:DonerCharitiesComponent},
  { path: 'settings', component:DonerSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonerRoutingModule { }
