import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from './dialog.service';

@Component({
  selector: 'grp-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {
  private showComponentSubscription!: Subscription;
  public show = false;
  
  constructor(private service: DialogService) {}

  ngOnInit(): void {
    this.showComponentSubscription = this.service.showComponent$.subscribe(d => console.log(d));
  }

  ngOnDestroy(): void {
    this.showComponentSubscription.unsubscribe();
  }
}
