import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './modules/guest/login/login.component';
import {AboutUsComponent} from './modules/guest/about-us/about-us.component';
import {ContactUsComponent} from './modules/guest/contact-us/contact-us.component';
import {HomeComponent} from './modules/guest/home/home.component';
import {ProductsComponent} from './modules/guest/products/products.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductsFormComponent} from './modules/guest/products-form/products-form.component';
import {ContactListComponent} from './modules/guest/contact-list/contact-list.component';
import {ConfigsComponent} from './modules/guest/configs/configs.component';
import {ContactDetailsComponent} from './modules/guest/contact-details/contact-details.component';


const routes: Routes = [
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
    path: 'configs',
    component: ConfigsComponent
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
