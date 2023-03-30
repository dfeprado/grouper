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

  open<T>(dialog: DialogOpen<T>): Observable<any> {
    const subscriber = new Subject<any>();
    
    this.showComponent$.next({dialog, subscriber});

    return subscriber.asObservable();
  }
}
