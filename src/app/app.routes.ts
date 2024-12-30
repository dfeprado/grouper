import { Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { SortingComponent } from './pages/sorting/sorting.component';

export const routes: Routes = [
    {path: "", component: PlayersComponent},
    {path: "sort", component: SortingComponent}
];
