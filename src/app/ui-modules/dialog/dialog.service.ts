import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DialogOpen } from './interfaces/dialog-open.interface';

export interface DialogCommand {
  dialog: DialogOpen<any>,
  subscriber: Subject<any>;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  readonly showComponent$ = new Subject<DialogCommand>();

  constructor() { }

  open<T>(dialog: DialogOpen<T>): Observable<T> {
    const subscriber = new Subject<T>();
    
    this.showComponent$.next({dialog, subscriber});

    return subscriber.asObservable();
  }
}
