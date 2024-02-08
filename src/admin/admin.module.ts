import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { CoreModule } from 'src/core/core.module';
import { CharitymanagerComponent } from './charitymanager/charitymanager.component';
import { CampaignManagerComponent } from './campaign-manager/campaign-manager.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminlayoutComponent,
    CharitymanagerComponent,
    CampaignManagerComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
