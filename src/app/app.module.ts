import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FloatingChatButtonComponent } from './floating-chat-button/floating-chat-button.component';
import { PolicyModuleComponent } from './policy-module/policy-module.component';
import { ClaimsModuleComponent } from './claims-module/claims-module.component';
import { HttpClientModule } from '@angular/common/http';
import { HealthComponent } from './health/health.component';
import { AutoComponent } from './auto/auto.component';
import { HomepropertyComponent } from './homeproperty/homeproperty.component';
import { BuypolicyComponent } from './buypolicy/buypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    FloatingChatButtonComponent,
    PolicyModuleComponent,
    ClaimsModuleComponent,
    HealthComponent,
    AutoComponent,
    HomepropertyComponent,
    BuypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
