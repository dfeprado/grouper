import { Component } from '@angular/core';
import { version } from './version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version = `${version.major}.${version.minor}.${version.release} (${new Date(version.timestamp).toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'})})`;
}
