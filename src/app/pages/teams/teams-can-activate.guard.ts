import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { RepoService } from '../../repo.service';
import { GrpNavigatorService } from '../../grp-navigator.service';
import { routesMap } from '../../app.routes';

export const teamsCanActivateGuard: CanActivateFn = (route, state) => {
  const repo = inject(RepoService);
  if (repo.getTeams().length > 0 || repo.getShufflePattern() !== '') {
    return true;
  }

  const navigator = inject(GrpNavigatorService);
  return navigator.createAbsoluteUrlTree(routesMap.players);
};
