import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { PopupComponent } from '../../components/popup/popup.component';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { GrpNavigatorService } from '../../grp-navigator.service';
import { routesMap } from '../../app.routes';
import { RepoService } from '../../repo.service';

@Component({
  selector: 'grp-players',
  imports: [PopupComponent, CheckboxComponent, FormsModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersComponent {
  private repo = inject(RepoService);
  private navigator = inject(GrpNavigatorService);
  private addPlayerPopup = viewChild(PopupComponent);
  private newPlayersTextArea =
    viewChild<ElementRef<HTMLTextAreaElement>>('newPlayersTextArea');
  private selectedPlayersIndexes = new Set<number>();
  public players = signal(this.repo.getPlayers());
  public newPlayers: string = '';
  public hasSelectedPlayer = signal(false);

  ngOnInit() {
    this.repo.clearTeamsCount();
  }

  public openAddPlayersPopup(): void {
    this.addPlayerPopup()?.open();
    setTimeout(() => {
      this.newPlayersTextArea()?.nativeElement.focus();
    });
  }

  public addPlayers(): void {
    const newPlayers = this.newPlayers
      .split('\n')
      .filter((e) => !!e)
      .map((e) => e.trim());
    if (newPlayers.length > 0) {
      const allPlayers = new Set<string>(this.players().concat(newPlayers));
      this.players.set(Array.from(allPlayers).sort());
    } else {
      alert('Você não adicionou nenhum jogador.');
    }
    this.closeAddPlayersPopup();
  }

  public closeAddPlayersPopup() {
    this.newPlayers = '';
    this.addPlayerPopup()?.close();
  }

  public selectPlayerIndex(index: number): void {
    if (this.selectedPlayersIndexes.has(index)) {
      this.selectedPlayersIndexes.delete(index);
    } else {
      this.selectedPlayersIndexes.add(index);
    }
    this.hasSelectedPlayer.set(this.selectedPlayersIndexes.size > 0);
  }

  public removePlayers(): void {
    const confirmed = confirm('Tem certeza que quer remover esses jogadores?');
    if (!confirmed) {
      return;
    }

    this.players.update((players) =>
      players.filter((_, idx) => !this.selectedPlayersIndexes.has(idx))
    );
    this.selectedPlayersIndexes.clear();
    this.hasSelectedPlayer.set(false);
  }

  public removeAllPlayers(): void {
    const confirmed = confirm(
      'Tem certeza que quer remover todos os jogadores?'
    );
    if (!confirmed) {
      return;
    }

    this.players.set([]);
    this.selectedPlayersIndexes.clear();
    this.hasSelectedPlayer.set(false);
  }

  public goShuffle(): void {
    this.repo.setPlayers(this.players());
    this.navigator.navigateAbsolute(routesMap.shuffle);
  }
}
