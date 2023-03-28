import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCanActivate } from './page/group-page/can-activate.guard';
import { GroupPageModule } from './page/group-page/group-page.module';
import { ListPageModule } from './page/list-page/list-page.module';
import { MemberShufflePageModule } from './page/member-shuffle-page/member-shuffle-page.module';

const routes: Routes = [
  { path: '', loadChildren: () => ListPageModule },
  { path: 'member-shuffle', loadChildren: () => MemberShufflePageModule },
  { 
    path: 'groups', 
    loadChildren: () => GroupPageModule ,
    canActivate: [GroupCanActivate]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
