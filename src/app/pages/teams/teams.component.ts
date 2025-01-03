import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cyrb128Sfc32RandomAlgorithm } from '../../algorithms/random.algorithm';
import { RepoService } from '../../repo.service';
import { Team } from '../../definitions/team.interface';
import { GrpNavigatorService } from '../../grp-navigator.service';
import { routesMap } from '../../app.routes';

@Component({
  selector: 'grp-teams',
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  private navigator = inject(GrpNavigatorService);
  private repo = inject(RepoService);
  public teams = signal(this.repo.getTeams());

  ngOnInit() {
    if (this.teams().length === 0) {
      this.shufflePlayers();
    }
  }

  private shufflePlayers(): void {
    const random = Cyrb128Sfc32RandomAlgorithm.seed(
      this.repo.getShufflePattern()
    );
    const teams: Team[] = new Array(this.repo.getTeamsCount())
      .fill(0)
      .map((e, idx) => ({
        letter: String.fromCharCode(65 + idx),
        members: <string[]>[],
      }));

    let teamsIdx = 0;
    const players = this.repo.getPlayers();
    while (players.length > 0) {
      const playerIdx = random(players.length);
      teams[teamsIdx++].members.push(players.splice(playerIdx, 1)[0]);
      if (teamsIdx === teams.length) {
        teamsIdx = 0;
      }
    }
    teams.forEach((e) => e.members.sort());
    this.repo.setTeams(teams);
    this.teams.set(teams);
  }

  public goMatches(): void {
    this.navigator.navigateAbsolute(routesMap.matches);
  }

  public goShuffle(): void {
    this.navigator.navigateAbsolute(routesMap.shuffle);
  }

  public goPlayers(): void {
    this.navigator.navigateAbsolute(routesMap.players);
  }
}
