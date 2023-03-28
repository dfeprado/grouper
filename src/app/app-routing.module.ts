import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCanActivate } from './page/group-page/can-activate.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/list-page/list-page.module').then(m => m.ListPageModule) },
  { path: 'member-shuffle', loadChildren: () => import('./page/member-shuffle-page/member-shuffle-page.module').then(m => m.MemberShufflePageModule) },
  { 
    path: 'groups', 
    loadChildren: () => import('./page/group-page/group-page.module').then(m => m.GroupPageModule) ,
    canActivate: [GroupCanActivate]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
