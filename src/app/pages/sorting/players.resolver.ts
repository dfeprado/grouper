import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';

export const playersResolver: ResolveFn<string[]> = (route, state) => {
  function redirectHome(): RedirectCommand {
    const router = inject(Router)
    return new RedirectCommand(router.createUrlTree(["/"]))
  }
  
  const players = localStorage.getItem("players")
  if (players === null) {
    return redirectHome()
  }
  try {
    const parsedPlayers = JSON.parse(players)
    if (!Array.isArray(parsedPlayers) || parsedPlayers.length === 0) {
      return redirectHome()
    }
    return parsedPlayers
  } catch (err) {
    return redirectHome()
  }
};
