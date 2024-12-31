import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';

export const teamsResolver: ResolveFn<{
  players: string[];
  shufflePattern: number[];
  numberOfTeams: number;
}> = (route, state) => {
  function returnHome(): RedirectCommand {
    const router = inject(Router);
    return new RedirectCommand(router.createUrlTree(['/']));
  }

  const players: string[] = JSON.parse(localStorage.getItem('players') ?? '[]');
  if (players.length === 0) {
    return returnHome();
  }

  const shufflePattern: number[] = JSON.parse(
    localStorage.getItem('shuffle_pattern') ?? '[]'
  );
  if (shufflePattern.length < 32) {
    return returnHome();
  }

  const numberOfTeams = Number.parseInt(
    localStorage.getItem('number_of_teams') ?? '0'
  );
  if (numberOfTeams > players.length) {
    return returnHome();
  }

  return { players, shufflePattern, numberOfTeams };
};
