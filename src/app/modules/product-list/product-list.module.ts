import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonSpinnerModule } from 'src/app/shared/components/button-spinner/button-spinner.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductListComponent } from './product-list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ButtonSpinnerModule,
    IvyCarouselModule
  ],
  providers: [
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent
  ]

})
export class ProductListModule {
}
