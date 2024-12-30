import { ChangeDetectionStrategy, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
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
  public players = signal(["Foo", "Bar", "Joe"])
  private addPlayerPopup = viewChild(PopupComponent)
  private newPlayersTextArea = viewChild<ElementRef<HTMLTextAreaElement>>("newPlayersTextArea")
  public newPlayers: string = ""

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
}
