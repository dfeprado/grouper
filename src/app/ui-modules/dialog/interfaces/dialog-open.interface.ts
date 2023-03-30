import { Type } from "@angular/core";

export interface DialogOpen<T> {
    component: Type<any>,
    data?: T;
    disableDispose?: boolean;
}