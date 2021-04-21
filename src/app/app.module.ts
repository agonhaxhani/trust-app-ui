import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenService} from './shared/services/auth/token.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {SwiperModule} from 'swiper/angular';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {GuestModule} from './modules/guest/guest.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
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
    GuestModule,
  ],
  providers: [
    TokenService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
