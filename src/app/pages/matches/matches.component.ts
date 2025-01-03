import { Component, inject, signal } from '@angular/core';
import { RepoService } from '../../repo.service';
import { GrpNavigatorService } from '../../grp-navigator.service';
import { Cyrb128Sfc32RandomAlgorithm } from '../../algorithms/random.algorithm';
import { Team } from '../../definitions/team.interface';
import { routesMap } from '../../app.routes';

@Component({
  selector: 'grp-matches',
  imports: [],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css',
})
export class MatchesComponent {
  private repo = inject(RepoService);
  private navigator = inject(GrpNavigatorService);
  public match = signal('');
  public pastMatches = signal(<string[]>[]);
  public finished = signal(false);

  ngOnInit() {
    const matches = this.repo.getMatches();
    if (matches.length === 0) {
      this.shuffleMatches();
    }

    const match = this.repo.getCurrentMatch();
    if (match !== null) {
      this.match.set(match);
    } else {
      this.finished.set(true);
    }
  }

  private shuffleMatches(): void {
    const teams = this.shuffleTeams();
    const matches = [];
    for (let i = 0; i < teams.length - 1; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matches.push(`${teams[i].letter} X ${teams[j].letter}`);
      }
    }
    this.repo.setMatches(matches);
  }

  private shuffleTeams(): Team[] {
    const teams = this.repo.getTeams();
    const random = Cyrb128Sfc32RandomAlgorithm.seed(
      this.repo.getShufflePattern()
    );
    const shuffledTeams: Team[] = [];
    while (teams.length > 0) {
      const teamIdx = random(teams.length);
      shuffledTeams.push(teams.splice(teamIdx, 1)[0]);
    }

    return shuffledTeams;
  }

  public nextMatch(): void {
    this.pastMatches().push(this.match());
    const match = this.repo.getNextMatch();
    if (match !== null) {
      this.match.set(match);
    } else {
      this.finished.set(true);
    }
  }

  public goTeams(): void {
    this.navigator.navigateAbsolute(routesMap.teams);
  }

  public goShuffle(): void {
    this.navigator.navigateAbsolute(routesMap.shuffle);
  }

  public goPlayers(): void {
    this.navigator.navigateAbsolute(routesMap.players);
  }
}
