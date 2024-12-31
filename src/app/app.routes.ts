import { Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { SortingComponent } from './pages/sorting/sorting.component';
import { playersResolver } from './pages/sorting/players.resolver';

export const routes: Routes = [
    {path: "", component: PlayersComponent},
    {path: "sort", component: SortingComponent, resolve: {players: playersResolver}}
];
