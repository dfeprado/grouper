import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogOpen } from './interfaces/dialog-open.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  readonly showComponent$ = new Subject<DialogOpen<any>>();

  constructor() { }

  open<T>(dialog: DialogOpen<T>): void {
    this.showComponent$.next(dialog);
  }
}
