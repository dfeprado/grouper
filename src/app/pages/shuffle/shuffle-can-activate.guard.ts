import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RepoService } from '../../repo.service';
import { GrpNavigatorService } from '../../grp-navigator.service';
import { routesMap } from '../../app.routes';

export const shuffleCanActivateGuard: CanActivateFn = (route, state) => {
  const repo = inject(RepoService);
  if (repo.getPlayers().length > 2) {
    repo.clearTeams();
    return true;
  }

  const navigator = inject(GrpNavigatorService);
  return navigator.createAbsoluteUrlTree(routesMap.players);
};
