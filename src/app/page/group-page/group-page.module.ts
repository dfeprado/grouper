import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupPageRoutingModule } from './group-page-routing.module';
import { GroupPageComponent } from './group-page.component';


@NgModule({
  declarations: [
    GroupPageComponent
  ],
  imports: [
    CommonModule,
    GroupPageRoutingModule
  ]
})
export class GroupPageModule { }
