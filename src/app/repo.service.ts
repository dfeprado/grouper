import { Injectable } from '@angular/core';
import { Team } from './definitions/team.interface';

const LS_PLAYERS_KEY = 'players';
const LS_TEAMS_COUNT_KEY = 'teams_count';
const LS_TEAMS_KEY = 'teams';
const LS_MATCHES_KEY = 'matches';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  private players?: string[];
  private teamsCount?: number;
  private teams?: Team[];
  private shufflePattern?: string;
  private matches?: string[];
  private currentMatch: number = 0;

  constructor() {}

  public getPlayers(): string[] {
    if (this.players === undefined) {
      this.players = JSON.parse(localStorage.getItem(LS_PLAYERS_KEY) ?? '[]');
    }

    return [...this.players!];
  }

  public setPlayers(value: string[]): void {
    if (value.length < 1) {
      throw 'Obrigatório ter pelo menos 2 jogadores.';
    }

    this.players = [...value];
    localStorage.setItem(LS_PLAYERS_KEY, JSON.stringify(this.players));
  }

  public countPlayers(): number {
    return this.players?.length ?? 0;
  }

  public getTeamsCount(): number {
    if (this.teamsCount === undefined) {
      this.teamsCount = Number.parseInt(
        localStorage.getItem(LS_TEAMS_COUNT_KEY) ?? '2'
      );
    }

    return this.teamsCount;
  }

  public clearTeamsCount(): void {
    this.setTeamsCount(2);
  }

  public setTeamsCount(value: number): void {
    if (value < 2) {
      throw 'Obrigatório ter pelo menos 2 grupos.';
    }

    this.teamsCount = Math.floor(value);
    localStorage.setItem(LS_TEAMS_COUNT_KEY, this.teamsCount.toString());
  }

  public getTeams(): Team[] {
    if (this.teams === undefined) {
      this.teams = JSON.parse(localStorage.getItem(LS_TEAMS_KEY) ?? '[]');
    }

    return [...this.teams!];
  }

  public setTeams(value: Team[]): void {
    if (value.length < 1) {
      throw 'Obrigatório ter pelo menos 1 time.';
    }

    this.teams = [...value];
    localStorage.setItem(LS_TEAMS_KEY, JSON.stringify(this.teams));
  }

  public clearTeams(): void {
    this.teams = undefined;
    localStorage.removeItem(LS_TEAMS_KEY);
  }

  public getShufflePattern(): string {
    return this.shufflePattern ?? '';
  }

  public setShufflePattern(mousePositions: number[][]): void {
    this.shufflePattern = btoa(
      mousePositions
        .flat()
        .map((e) => e.toString(16))
        .join()
    );
  }

  public getMatches(): string[] {
    if (this.matches === undefined) {
      this.matches = JSON.parse(localStorage.getItem(LS_MATCHES_KEY) ?? '[]');
    }
    return [...this.matches!];
  }

  public setMatches(value: string[]): void {
    this.currentMatch = 0;
    this.matches = [...value];
    localStorage.setItem(LS_MATCHES_KEY, JSON.stringify(this.matches));
  }

  public getCurrentMatch(): string | null {
    if (this.currentMatch >= this.matches!.length) {
      return null;
    }

    return this.matches![this.currentMatch];
  }

  public getNextMatch(): string | null {
    if (this.matches === undefined || this.matches.length === 0) {
      throw 'Nenhuma partida foi definida.';
    }

    const nextMatch = ++this.currentMatch;
    if (nextMatch === this.matches?.length) {
      return null;
    }

    return this.matches[nextMatch];
  }

  public clearMatches(): void {
    this.matches = undefined;
    localStorage.removeItem(LS_MATCHES_KEY);
  }
}
