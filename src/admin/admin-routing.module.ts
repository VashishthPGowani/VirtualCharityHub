import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharitymanagerComponent } from './charitymanager/charitymanager.component';
import { CampaignManagerComponent } from './campaign-manager/campaign-manager.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddEdituserComponent } from './add-edituser/add-edituser.component';

const routes: Routes = [
  {path: '', component:AdminDashboardComponent},
  {path: 'dashboard', component:AdminDashboardComponent},
  {path: 'charities', component:CharitymanagerComponent},
  {path: 'charities/:status', component:CharitymanagerComponent},
  {path: 'campaigns', component:CampaignManagerComponent},
  {path: 'campaigns/:status', component:CampaignManagerComponent},
  {path: 'users', component:UsersComponent},
  {path: 'users/add', component:AddEdituserComponent},
  {path: 'users/edit', component:AddEdituserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
