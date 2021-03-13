import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { LoginComponent } from './login/login.component';
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
import { HeaderLoggedComponent } from './header-logged/header-logged.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    GuestComponent,
    LoginComponent,
    AboutUsComponent,
    HeaderLoggedComponent,
    FooterComponent
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
    ButtonSpinnerModule
  ],
  providers: [
    AuthenticationService,
    TokenService
  ]
})
export class GuestModule {
}
