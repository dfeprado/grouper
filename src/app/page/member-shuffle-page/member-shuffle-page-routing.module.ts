import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberShufflePageComponent } from './member-shuffle-page.component';

const routes: Routes = [{ path: '', component: MemberShufflePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberShufflePageRoutingModule { }
