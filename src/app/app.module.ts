import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenService} from './shared/services/auth/token.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {SwiperModule} from 'swiper/angular';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {LoginComponent} from './modules/guest/login/login.component';
import {AboutUsComponent} from './modules/guest/about-us/about-us.component';
import {HeaderComponent} from './modules/guest/header/header.component';
import {FooterComponent} from './modules/guest/footer/footer.component';
import {ContactUsComponent} from './modules/guest/contact-us/contact-us.component';
import {MapComponent} from './modules/guest/map/map.component';
import {HomeComponent} from './modules/guest/home/home.component';
import {HomeBannerTitlesComponent} from './modules/guest/home/home-banner-titles/home-banner-titles.component';
import {ProductsComponent} from './modules/guest/products/products.component';
import {ProductsFormComponent} from './modules/guest/products-form/products-form.component';
import {ContactListComponent} from './modules/guest/contact-list/contact-list.component';
import {ContactDetailsComponent} from './modules/guest/contact-details/contact-details.component';
import {ConfigsComponent} from './modules/guest/configs/configs.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ButtonSpinnerModule} from './shared/components/button-spinner/button-spinner.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {ProductListModule} from './modules/product-list/product-list.module';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {AuthenticationService} from './shared/services/auth/authentication.service';
import {ProductService} from './shared/services/product.service';
import {ContactUsService} from './shared/services/contact-us.service';
import {FileService} from './shared/services/file.service';
import {SnackbarService} from './shared/services/snackbar.service';
import {ConfigsService} from './shared/services/configs.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    LoginComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    MapComponent,
    HomeComponent,
    HomeBannerTitlesComponent,
    ProductsComponent,
    ProductsFormComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ConfigsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxUsefulSwiperModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule,
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
    MatIconModule
  ],
  providers: [
    TokenService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    AuthenticationService,
    TokenService,
    ProductService,
    ContactUsService,
    FileService,
    SnackbarService,
    ConfigsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
