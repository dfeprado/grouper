import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PopupComponent } from '../../components/popup/popup.component';

const LS_NUMBER_OF_TEAMS_KEY = 'number_of_teams';
const LS_SHUFFLE_PATTERN_POSITIONS_KEY = 'sort_pattern';

@Component({
  selector: 'grp-sorting',
  imports: [FormsModule, RouterLink, PopupComponent],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private shuffleCanvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private shuffleCanvasCtx: CanvasRenderingContext2D | null = null;
  private shuffleCanvasTop: number = 0;
  private shuffleCanvasLeft: number = 0;
  private shufflePatternPositions: number[][] = [];
  public drawingShufflePattern = signal(false);
  public insuficientShufflePatternPoints = signal(false);
  public shufflePatternPopup = viewChild(PopupComponent);
  public players: string[] = [];
  public numberOfPlayers = 0;
  public numberOfTeams = signal(
    Number.parseInt(localStorage.getItem(LS_NUMBER_OF_TEAMS_KEY) ?? '2')
  );
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

  constructor() {
    effect(() => {
      localStorage.setItem(
        LS_NUMBER_OF_TEAMS_KEY,
        this.numberOfTeams().toString()
      );
    });
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.players = data['players'];

      this.numberOfPlayers = this.players.length;
    });

    this.openShufflePopup();
  }

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

  public openShufflePopup(): void {
    const canvas = this.shuffleCanvas()?.nativeElement;
    this.shuffleCanvasCtx = canvas?.getContext('2d')!;
    this.shuffleCanvasCtx.canvas.width = canvas!.offsetWidth;
    this.shuffleCanvasCtx.canvas.height = canvas!.offsetHeight;
    this.resetCanvas();
    this.shufflePatternPopup()?.open();
  }

  public drawPattern(event: MouseEvent): void {
    if (event.buttons !== 1) {
      return;
    }

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
    const x = event.clientX - offsetLeft;
    const y = event.clientY - offsetTop;

    if (this.shufflePatternPositions.length > 0) {
      const ctx = this.shuffleCanvasCtx!;
      const lastPosition =
        this.shufflePatternPositions[this.shufflePatternPositions.length - 1];
      ctx.beginPath();
      ctx.moveTo(lastPosition[0], lastPosition[1]);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    this.shufflePatternPositions.push([x, y]);
  }

  private resetCanvas() {
    this.shufflePatternPositions = [];
    this.shuffleCanvasCtx!.fillStyle = 'black';
    this.shuffleCanvasCtx!.fillRect(0, 0, 350, 350);
    this.shuffleCanvasCtx!.strokeStyle = 'red';
    this.shuffleCanvasCtx!.lineCap = 'square';
    this.shuffleCanvasCtx!.lineWidth = 3;
  }

  public finishPatternDrawing(event: MouseEvent): void {
    if (event.buttons === 1 || !this.drawingShufflePattern()) {
      return;
    }
    this.drawingShufflePattern.set(false);
    if (this.shufflePatternPositions.length < 32) {
      console.log('Desenhe mais');
      this.insuficientShufflePatternPoints.set(true);
    } else {
      localStorage.setItem(
        LS_SHUFFLE_PATTERN_POSITIONS_KEY,
        JSON.stringify(this.shufflePatternPositions)
      );
      this.router.navigateByUrl('/teams');
    }
  }

  public drawPatternForTouch(event: TouchEvent): void {
    console.log(event.touches[0].clientX);
    console.log(event.touches[0].clientY);
  }
}
