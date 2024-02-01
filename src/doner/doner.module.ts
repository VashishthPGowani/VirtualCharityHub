import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonerRoutingModule } from './doner-routing.module';
import { DonerlayoutComponent } from './donerlayout/donerlayout.component';
import { CoreModule } from 'src/core/core.module';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { DonerCharitiesComponent } from './doner-charities/doner-charities.component';
import { DonerSettingsComponent } from './doner-settings/doner-settings.component';


@NgModule({
  declarations: [
    DonerlayoutComponent,
    DonorHomeComponent,
    DonerCharitiesComponent,
    DonerSettingsComponent
  ],
  imports: [
    CommonModule,
    DonerRoutingModule,
    CoreModule
  ]
})
export class DonerModule { }