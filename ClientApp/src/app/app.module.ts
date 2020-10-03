import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ResourcesComponent } from './resources/resources.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InstagramComponent } from './instagram/instagram.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './_services/auth.service';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ResourcesComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    InstagramComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
