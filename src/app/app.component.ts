import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, signal, viewChild } from '@angular/core';
import { PopupComponent } from './components/popup/popup.component';
import { FormsModule } from '@angular/forms';

const LS_PLAYERS_KEY = "players";
@Component({
  selector: 'grp-root',
  imports: [PopupComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public players = signal(<string[]>[])
  private addPlayerPopup = viewChild(PopupComponent)
  private newPlayersTextArea = viewChild<ElementRef<HTMLTextAreaElement>>("newPlayersTextArea")
  public newPlayers: string = ""
  private selectedPlayersIndexes = new Set<number>()
  public hasSelectedPlayer = signal(false)

  constructor() {
    const players = localStorage.getItem(LS_PLAYERS_KEY) ?? ""
    if (players) {
      this.players.set(JSON.parse(players))
    }

    effect(() => {
      localStorage.setItem(LS_PLAYERS_KEY, JSON.stringify(this.players()))
    })
  }

  public openAddPlayersPopup(): void {
    this.addPlayerPopup()?.open()
    setTimeout(() => {
      this.newPlayersTextArea()?.nativeElement.focus()
    });
  }

  public addPlayers(): void {
    const newPlayers = this.newPlayers.split("\n").filter(e => !!e)
    if (newPlayers.length > 0) {
      const allPlayers = new Set<string>(this.players().concat(newPlayers))
      this.players.set(Array.from(allPlayers).sort())
    } else {
      alert("Você não adicionou nenhum jogador.")
    }
    this.closeAddPlayersPopup();
  }

  public closeAddPlayersPopup() {
    this.newPlayers = ""
    this.addPlayerPopup()?.close();
  }

  public selectPlayerIndex(index: number): void {
    if (this.selectedPlayersIndexes.has(index)) {
      this.selectedPlayersIndexes.delete(index)
    } else {
      this.selectedPlayersIndexes.add(index);
    }
    this.hasSelectedPlayer.set(this.selectedPlayersIndexes.size > 0)
  }

  public removePlayers(): void {
    const confirmed = confirm("Tem certeza que quer remover esses jogadores?")
    if (!confirmed) {
      return;
    }

    this.players.update(players => players.filter((_, idx) => !this.selectedPlayersIndexes.has(idx)))
    this.selectedPlayersIndexes.clear();
    this.hasSelectedPlayer.set(false);
  }
}
