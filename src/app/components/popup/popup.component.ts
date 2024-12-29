import { Component, signal } from '@angular/core';

type PopupOptions = {
  confirmLabel?: string;
  cancelLabel?: string;
  hideCancelButton?: boolean;
}

@Component({
  selector: 'grp-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  public hideCancelButton = signal(true)
  public confirmButtonLabel = signal("Ok")
  public cancelButtonLabel = signal("Cancelar")
  public hidden = signal(true)

  public open(options?: PopupOptions): void {
    this.confirmButtonLabel.set(options?.confirmLabel ?? "Ok")
    this.cancelButtonLabel.set(options?.cancelLabel ?? "Cancelar")
    this.hideCancelButton.set(options?.hideCancelButton ?? false)
    this.hidden.set(false)
  }

  public cancel(): void {
    this.hidden.set(true);
  }
}
