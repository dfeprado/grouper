import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';

@Component({
  selector: 'grp-root',
  imports: [RouterOutlet, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public players = signal(["Foo", "Bar", "Joe"])
  private addPlayerPopup = viewChild(PopupComponent)

  public addPlayers(): void {
    this.addPlayerPopup()?.open({confirmLabel: "Adicionar"})
  }
}
