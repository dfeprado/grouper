import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[dialogContentHost]'
})
export class DialogContentHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}