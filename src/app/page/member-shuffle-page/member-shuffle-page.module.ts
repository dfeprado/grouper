import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberShufflePageRoutingModule } from './member-shuffle-page-routing.module';
import { MemberShufflePageComponent } from './member-shuffle-page.component';


@NgModule({
  declarations: [
    MemberShufflePageComponent
  ],
  imports: [
    CommonModule,
    MemberShufflePageRoutingModule
  ]
})
export class MemberShufflePageModule { }
