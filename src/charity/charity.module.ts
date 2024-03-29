import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharityRoutingModule } from './charity-routing.module';
import { CharitylayoutComponent } from './charitylayout/charitylayout.component';
import { CoreModule } from 'src/core/core.module';
import { CharityDashboardComponent } from './charity-dashboard/charity-dashboard.component';
import { OtherCharitiesComponent } from './other-charities/other-charities.component';
import { MyCharitySettingsComponent } from './my-charity-settings/my-charity-settings.component';
import { MyCampagineListComponent } from './my-campagine-list/my-campagine-list.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';


@NgModule({
  declarations: [
    CharitylayoutComponent,
    CharityDashboardComponent,
    OtherCharitiesComponent,
    MyCharitySettingsComponent,
    MyCampagineListComponent,
    CampaignFormComponent
  ],
  imports: [
    CommonModule,
    CharityRoutingModule,
    CoreModule
  ]
})
export class CharityModule { }
