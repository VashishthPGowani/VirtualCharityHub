import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonerRoutingModule } from './doner-routing.module';
import { DonerlayoutComponent } from './donerlayout/donerlayout.component';
import { CoreModule } from 'src/core/core.module';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { DonerCharitiesComponent } from './doner-charities/doner-charities.component';
import { DonerSettingsComponent } from './doner-settings/doner-settings.component';
import { DonateComponent } from './donate/donate.component';
import { FormsModule } from '@angular/forms';
import { MydonationsComponent } from './mydonations/mydonations.component';
import { NgxStripeModule } from 'ngx-stripe';


@NgModule({
  declarations: [
    DonerlayoutComponent,
    DonorHomeComponent,
    DonerCharitiesComponent,
    DonerSettingsComponent,
    DonateComponent,
    MydonationsComponent
  ],
  imports: [
    CommonModule,
    DonerRoutingModule,
    CoreModule,
    FormsModule,
    NgxStripeModule.forRoot("pk_test_51P1fxcP0bZKcBUr0Isx3wGJfn33hji4D5AK8dhmGgCd7j5oYDb4emPpLHZaiK5zbA1MrszDBg5qiFmp1pm7slywZ00M1KOMIWV")
  ]
})
export class DonerModule { }
