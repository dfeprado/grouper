import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogContentHostDirective } from './dialog-content-host.directive';
import { DialogService } from './dialog.service';
import { DialogOpen } from './interfaces/dialog-open.interface';
import { Dialog } from './interfaces/dialog.interface';

@Component({
  selector: 'grp-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {
  private showComponentSubscription!: Subscription;
  public show = false;

  @ViewChild(DialogContentHostDirective, {static: true}) contentHost!: DialogContentHostDirective;
  
  constructor(private service: DialogService) {}

  ngOnInit(): void {
    this.showComponentSubscription = this.service.showComponent$.subscribe(d => this.open(d));
  }

  ngOnDestroy(): void {
    this.showComponentSubscription.unsubscribe();
  }

  private open(d: DialogOpen<any>): void {
    const viewContainerRef =  this.contentHost.viewContainerRef;
    
    viewContainerRef.clear();

    const component = viewContainerRef.createComponent<Dialog<any>>(d.component);

    component.instance.data = d.data;

    this.show = true;
  }

  dispose(): void {
    this.show = false;
    this.contentHost.viewContainerRef.clear();
  }
}
