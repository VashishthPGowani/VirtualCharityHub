import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { CoreModule } from 'src/core/core.module';
import { CharitymanagerComponent } from './charitymanager/charitymanager.component';
import { CampaignManagerComponent } from './campaign-manager/campaign-manager.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddEdituserComponent } from './add-edituser/add-edituser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminlayoutComponent,
    CharitymanagerComponent,
    CampaignManagerComponent,
    AdminDashboardComponent,
    UsersComponent,
    AddEdituserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
