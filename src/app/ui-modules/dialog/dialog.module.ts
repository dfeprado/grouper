import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogContentHostDirective } from './dialog-content-host.directive';

@NgModule({
  declarations: [
    DialogComponent,
    DialogContentHostDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
