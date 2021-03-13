import {NgModule} from "@angular/core";
import {ButtonSpinnerComponent} from "./button-spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ButtonSpinnerComponent
  ],
  exports: [
    ButtonSpinnerComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    CommonModule
  ]
})
export class ButtonSpinnerModule {
}
