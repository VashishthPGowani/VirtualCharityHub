import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminModule } from 'src/admin/admin.module';
import { AdminlayoutComponent } from 'src/admin/adminlayout/adminlayout.component';
import { DonerModule } from 'src/doner/doner.module';
import { DonerlayoutComponent } from 'src/doner/donerlayout/donerlayout.component';
import { CharityModule } from 'src/charity/charity.module';
import { CharitylayoutComponent } from 'src/charity/charitylayout/charitylayout.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CharityListComponent } from './charity-list/charity-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'charity-list', component:  CharityListComponent},
  { path: 'campaign-list', component: CampaignListComponent},
  {
    path: 'admin',
    loadChildren: () => AdminModule,
    component: AdminlayoutComponent,
  },
  {
    path: 'donor',
    loadChildren: () => DonerModule,
    component: DonerlayoutComponent,
  },
  {
    path: 'charity',
    loadChildren: () => CharityModule,
    component: CharitylayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
