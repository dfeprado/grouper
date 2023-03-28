import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/list-page/list-page.module').then(m => m.ListPageModule) },
  { path: 'member-shuffle', loadChildren: () => import('./page/member-shuffle-page/member-shuffle-page.module').then(m => m.MemberShufflePageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
