import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {AccountRoutingModule} from './account-routing.module';
import { HeaderComponent } from './header/header.component';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { DeleteFormComponent } from './shared/delete-form/delete-form.component';
import { ProductListModule } from '../product-list/product-list.module';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsComponent } from './products/products.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from 'src/app/shared/services/product.service';



@NgModule({
  declarations: [
    AccountComponent,
    HeaderComponent,
    DeleteFormComponent,
    ProductsFormComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    _MatMenuDirectivesModule,
    MatButtonModule,
    MatMenuModule,
    ProductListModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    ProductService
  ]
})
export class AccountModule { }
