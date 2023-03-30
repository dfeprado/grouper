import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'src/app/ui-modules/dialog/dialog.module';

@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    FormsModule,
    DialogModule
  ]
})
export class ListPageModule { }
