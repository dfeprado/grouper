import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'grp-sorting',
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingComponent {
  private activatedRoute = inject(ActivatedRoute);
  public players: string[] = [];
  public numberOfPlayers = 0;
  public numberOfTeams = signal(2);
  public teams = computed(() => {
    if (
      this.numberOfTeams() <= 1 ||
      this.numberOfTeams() > this.numberOfPlayers
    ) {
      return null;
    }

    const membersPerTeam = Math.floor(
      this.numberOfPlayers / this.numberOfTeams()
    );
    const teamMemberCount = Array(this.numberOfTeams()).fill(membersPerTeam);

    const playersLeft =
      this.numberOfPlayers - membersPerTeam * this.numberOfTeams();
    for (let i = 0; i < playersLeft; i++) {
      teamMemberCount[i]++;
    }

    let charCode = 65;
    return teamMemberCount.map((e) => ({
      letter: String.fromCharCode(charCode++),
      membersCount: e,
    }));
  });

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.players = data['players'];

      this.numberOfPlayers = this.players.length;
    });
  }
}
