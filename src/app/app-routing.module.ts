import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PolicyModuleComponent } from './policy-module/policy-module.component';
import { ClaimsModuleComponent } from './claims-module/claims-module.component';
import { HealthComponent } from './health/health.component';
import { AutoComponent } from './auto/auto.component';
import { HomepropertyComponent } from './homeproperty/homeproperty.component';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BuypolicyComponent } from './buypolicy/buypolicy.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'policy',component:PolicyModuleComponent},
  {path:'health',component:HealthComponent},
  {path:'auto',component:AutoComponent},
  {path:'homeproperty',component:HomepropertyComponent},
  {path:'', component:HomeComponent},
  {path:'buypolicy', component:BuypolicyComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'admindashboard', component:AdmindashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
