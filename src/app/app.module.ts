import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from 'src/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharityListComponent } from './charity-list/charity-list.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CharityRegisterComponent } from './charity-register/charity-register.component';
import { CharitydetailComponent } from './charitydetail/charitydetail.component';
import { CampaigndetailComponent } from './campaigndetail/campaigndetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CharityListComponent,
    CampaignListComponent,
    CharityRegisterComponent,
    CharitydetailComponent,
    CampaigndetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
