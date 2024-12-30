import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private players: string[] = [];

  constructor() { }

  public setPlayers(players: string[]): void {
    this.players = [...players];
  }

  public getPlayers(): string[] {
    return this.players;
  }

  public countPlayers(): number {
    return this.players.length;
  }
}
