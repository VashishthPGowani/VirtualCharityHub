import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharitymanagerComponent } from './charitymanager/charitymanager.component';
import { CampaignManagerComponent } from './campaign-manager/campaign-manager.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path: '', component:AdminDashboardComponent},
  {path: 'charities', component:CharitymanagerComponent},
  {path: 'campaigns', component:CampaignManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
