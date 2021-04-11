import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { RouterModule } from '@angular/router';
import { GuestRoutingModule } from './guest-routing.module';
import { AuthenticationService } from '../../shared/services/auth/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenService } from '../../shared/services/auth/token.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ButtonSpinnerModule } from "../../shared/components/button-spinner/button-spinner.module";
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderNotLogged } from './header-logged/header-not-logged.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerTitlesComponent } from './home/home-banner-titles/home-banner-titles.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProductListModule } from '../product-list/product-list.module';

@NgModule({
  declarations: [
    GuestComponent,
    LoginComponent,
    AboutUsComponent,
    HeaderNotLogged,
    FooterComponent,
    ContactUsComponent,
    MapComponent,
    HomeComponent,
    HomeBannerTitlesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GuestRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ButtonSpinnerModule,
    IvyCarouselModule,
    ProductListModule
  ],
  providers: [
    AuthenticationService,
    TokenService
  ]
})
export class GuestModule {
}
