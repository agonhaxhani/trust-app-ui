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
import { ProductsComponent } from './products/products.component';
import { ProductService } from 'src/app/shared/services/product.service';
import {ContactUsService} from '../../shared/services/contact-us.service';
import {ProductsFormComponent} from './products-form/products-form.component';
import {FileService} from '../../shared/services/file.service';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SnackbarService} from '../../shared/services/snackbar.service';
import {MatMenuModule} from '@angular/material/menu';
import { ContactListComponent } from './contact-list/contact-list.component';
import {MatTableModule} from '@angular/material/table';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {MatIconModule} from '@angular/material/icon';
import {SwiperModule} from 'swiper/angular';

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
    ProductsComponent,
    ProductsFormComponent,
    ContactListComponent,
    ContactDetailsComponent
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
        ProductListModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTableModule,
        MatIconModule,
        SwiperModule
    ],
  exports: [
    MapComponent
  ],
  providers: [
    AuthenticationService,
    TokenService,
    ProductService,
    ContactUsService,
    FileService,
    SnackbarService,
  ]
})
export class GuestModule {
}
