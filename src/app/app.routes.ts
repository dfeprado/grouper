import { Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';
import { ShuffleComponent } from './pages/shuffle/shuffle.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { inject } from '@angular/core';
import { GrpNavigatorService } from './grp-navigator.service';
import { shuffleCanActivateGuard } from './pages/shuffle/shuffle-can-activate.guard';
import { teamsCanActivateGuard } from './pages/teams/teams-can-activate.guard';
import { MatchesComponent } from './pages/matches/matches.component';

export const routesMap = {
  players: 'players',
  shuffle: 'shuffle',
  teams: 'teams',
  matches: 'matches',
};

export const routes: Routes = [
  { path: routesMap.players, component: PlayersComponent },
  {
    path: routesMap.shuffle,
    component: ShuffleComponent,
    canActivate: [shuffleCanActivateGuard],
  },
  {
    path: routesMap.teams,
    component: TeamsComponent,
    canActivate: [teamsCanActivateGuard],
  },
  {
    path: routesMap.matches,
    component: MatchesComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: () => {
      const navigator = inject(GrpNavigatorService);
      const currentPage = navigator.getActivePage();
      return currentPage;
    },
  },
];
