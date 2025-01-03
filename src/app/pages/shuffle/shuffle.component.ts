import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from '../../components/popup/popup.component';
import { RepoService } from '../../repo.service';
import { GrpNavigatorService } from '../../grp-navigator.service';
import { routesMap } from '../../app.routes';

@Component({
  selector: 'grp-shuffle',
  imports: [FormsModule, PopupComponent],
  templateUrl: './shuffle.component.html',
  styleUrl: './shuffle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShuffleComponent {
  private navigator = inject(GrpNavigatorService);
  private repo = inject(RepoService);
  private shuffleCanvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private shuffleCanvasCtx: CanvasRenderingContext2D | null = null;
  private shufflePatternPositions: number[][] = [];
  public drawingShufflePattern = signal(false);
  public insuficientShufflePatternPoints = signal(false);
  public shufflePatternPopup = viewChild(PopupComponent);
  public players: string[] = this.repo.getPlayers();
  public numberOfPlayers = this.repo.countPlayers();
  public numberOfTeams = signal(this.repo.getTeamsCount());
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

  public reduceTeams(): void {
    this.numberOfTeams.update((value) => {
      if (value > 2) {
        return value - 1;
      }

      return value;
    });
  }

  public increaseTeams(): void {
    this.numberOfTeams.update((value) => {
      if (value < this.numberOfPlayers) {
        return value + 1;
      }

      return value;
    });
  }

  public finishPatternDrawing(event: MouseEvent | TouchEvent): void {
    console.log('OK');
    if (
      (event instanceof MouseEvent && event.buttons === 1) ||
      !this.drawingShufflePattern()
    ) {
      return;
    }
    this.drawingShufflePattern.set(false);
    if (this.shufflePatternPositions.length < 32) {
      console.log('Desenhe mais');
      this.insuficientShufflePatternPoints.set(true);
    } else {
      this.repo.clearMatches();
      this.repo.setTeamsCount(this.numberOfTeams());
      this.repo.setShufflePattern(this.shufflePatternPositions);
      this.navigator.navigateAbsolute(routesMap.teams);
    }
  }

  public openShufflePopup(): void {
    const canvas = this.shuffleCanvas()?.nativeElement;
    this.shuffleCanvasCtx = canvas?.getContext('2d')!;
    this.shuffleCanvasCtx.canvas.width = canvas!.offsetWidth;
    this.shuffleCanvasCtx.canvas.height = canvas!.offsetHeight;
    this.shufflePatternPopup()?.open();
    this.resetCanvas();
  }

  public drawPattern(event: MouseEvent): void {
    if (event.buttons !== 1) {
      return;
    }

    this.actuallyDraw(event.clientX, event.clientY);
  }

  public drawPatternForTouch(event: TouchEvent): void {
    event.preventDefault();
    this.actuallyDraw(event.touches[0].clientX, event.touches[0].clientY);
  }

  private actuallyDraw(x: number, y: number) {
    if (this.insuficientShufflePatternPoints()) {
      this.resetCanvas();
    }

    if (!this.drawingShufflePattern()) {
      this.drawingShufflePattern.set(true);
      this.insuficientShufflePatternPoints.set(false);
    }

    const canvas = this.shuffleCanvas()!.nativeElement;
    const offsetTop = canvas.offsetTop;
    const offsetLeft = canvas.offsetLeft;
    const _x = x - offsetLeft;
    const _y = y - offsetTop;

    if (this.shufflePatternPositions.length > 0) {
      const ctx = this.shuffleCanvasCtx!;
      const lastPosition =
        this.shufflePatternPositions[this.shufflePatternPositions.length - 1];
      ctx.beginPath();
      ctx.moveTo(lastPosition[0], lastPosition[1]);
      ctx.lineTo(_x, _y);
      ctx.stroke();
    }

    this.shufflePatternPositions.push([_x, _y]);
  }

  private resetCanvas() {
    this.shufflePatternPositions = [];
    this.shuffleCanvasCtx!.fillStyle = 'black';
    this.shuffleCanvasCtx!.fillRect(0, 0, 350, 350);
    this.shuffleCanvasCtx!.strokeStyle = 'red';
    this.shuffleCanvasCtx!.lineCap = 'square';
    this.shuffleCanvasCtx!.lineWidth = 3;
  }

  public goPlayers(): void {
    this.navigator.navigateAbsolute(routesMap.players);
  }
}
