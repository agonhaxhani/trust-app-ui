import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {GuestComponent} from './guest.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import {ProductDetailsComponent} from '../../product-details/product-details.component';
import {ProductsFormComponent} from './products-form/products-form.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'product/list',
        component: ProductsComponent
      },
      {
        path: 'product/details/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'product/create',
        component: ProductsFormComponent
      },
      {
        path: 'product/update/:id',
        component: ProductsFormComponent
      },
      {
        path: 'contact-list',
        component: ContactListComponent
      },
      {
        path: 'contact-details/:id',
        component: ContactDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
