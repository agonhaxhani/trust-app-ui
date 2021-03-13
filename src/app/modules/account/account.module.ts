import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {AccountRoutingModule} from './account-routing.module';
import { HeaderComponent } from './header/header.component';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { DeleteFormComponent } from './shared/delete-form/delete-form.component';



@NgModule({
  declarations: [AccountComponent, HeaderComponent, DeleteFormComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    _MatMenuDirectivesModule,
    MatButtonModule,
    MatMenuModule
  ],
})
export class AccountModule { }
