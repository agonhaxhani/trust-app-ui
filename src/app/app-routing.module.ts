import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {RouterUrls} from './shared/constants/RouterUrls';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: RouterUrls.GUEST.BASE_MODULE,
        pathMatch: 'full'
      },
      {
        path: RouterUrls.GUEST.BASE_MODULE,
        loadChildren: () => import('./modules/guest/guest.module').then(mod => mod.GuestModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
