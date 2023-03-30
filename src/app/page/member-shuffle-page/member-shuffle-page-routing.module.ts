import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { memberShufflePageCanActivate } from './member-shuffle-page.can-activate';
import { MemberShufflePageComponent } from './member-shuffle-page.component';

const routes: Routes = [{ path: '', component: MemberShufflePageComponent, canActivate: [memberShufflePageCanActivate] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberShufflePageRoutingModule { }
