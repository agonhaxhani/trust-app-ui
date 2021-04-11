import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from './account.component';
import {RouterUrls} from '../../shared/constants/RouterUrls';
import { ProductsComponent } from './products/products.component';
import { ProductsFormComponent } from './products-form/products-form.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/create',
        component: ProductsFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
