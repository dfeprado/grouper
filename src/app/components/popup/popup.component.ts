import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'grp-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {
  public hidden = signal(true)

  public open(): void {
    this.hidden.set(false)
  }

  public close(): void {
    this.hidden.set(true);
  }
}
