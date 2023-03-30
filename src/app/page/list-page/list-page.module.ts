import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'src/app/ui-modules/dialog/dialog.module';
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';

@NgModule({
  declarations: [
    ListPageComponent,
    AddMemberDialogComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    ReactiveFormsModule,
    DialogModule,
  ]
})
export class ListPageModule { }
