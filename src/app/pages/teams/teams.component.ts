import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'grp-teams',
  imports: [RouterLink],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  private activatedRoute = inject(ActivatedRoute);
  public teams = signal<{ letter: string; members: string[] }[]>([]);

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      const players = data['data']['players'];
      const shufflePattern = data['data']['shufflePattern'];
      const numberOfTeams = data['data']['numberOfTeams'];

      this.shufflePlayers(players, shufflePattern, numberOfTeams);
    });
  }

  private shufflePlayers(
    players: string[],
    shufflePattern: number[],
    numberOfTeams: number
  ): void {
    const seedKey = shufflePattern
      .flat()
      .map((e) => e.toString(16))
      .join('');
    const seed = this.cyrb128(seedKey);
    const rand = this.sfc32(seed);

    const teams = new Array(numberOfTeams).fill(0).map((e, idx) => ({
      letter: String.fromCharCode(65 + idx),
      members: <string[]>[],
    }));
    let teamsIdx = 0;
    const playersCopy = [...players];
    while (playersCopy.length > 0) {
      const playerIdx = Math.floor(rand() * playersCopy.length);
      teams[teamsIdx++].members.push(playersCopy.splice(playerIdx, 1)[0]);
      if (teamsIdx === teams.length) {
        teamsIdx = 0;
      }
    }
    teams.forEach((e) => e.members.sort());
    this.teams.set(teams);
  }

  /*
  Thanks to https://stackoverflow.com/users/815680/bryc
  and his answer on 
  https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
  */
  private cyrb128(key: string): number[] {
    let h1 = 1779033703,
      h2 = 3144134277,
      h3 = 1013904242,
      h4 = 2773480762;

    for (let i = 0; i < key.length; i++) {
      const k = key.charCodeAt(i);
      h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
      h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
      h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
      h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }

    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);

    (h1 ^= h2 ^ h3 ^ h4), (h2 ^= h1), (h3 ^= h1), (h4 ^= h1);

    return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
  }

  private sfc32(seed: number[]): any {
    let [a, b, c, d] = seed;
    return function (): number {
      a |= 0;
      b |= 0;
      c |= 0;
      d |= 0;

      let t = (((a + b) | 0) + d) | 0;
      d = (d + 1) | 0;
      a = b ^ (b >>> 9);
      b = (c + (c << 3)) | 0;
      c = (c << 21) | (c >>> 11);
      c = (c + t) | 0;
      return (t >>> 0) / 4294967296;
    };
  }
}
