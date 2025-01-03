import { inject, Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

const LS_ACTIVE_PAGE_KEY = 'active_page';

@Injectable({
  providedIn: 'root',
})
export class GrpNavigatorService {
  private router = inject(Router);
  private activePage?: string;

  constructor() {}

  public navigateAbsolute(url: string): void {
    url = '/' + url;
    this.setActivePage(url);
    this.router.navigateByUrl(this.activePage!);
  }

  public createAbsoluteUrlTree(url: string): UrlTree {
    url = '/' + url;
    return this.router.createUrlTree([url]);
  }

  public getActivePage(): string {
    if (this.activePage === undefined) {
      this.activePage = localStorage.getItem(LS_ACTIVE_PAGE_KEY) ?? '/players';
    }

    return this.activePage;
  }

  public setActivePage(value: string) {
    this.activePage = value;
    localStorage.setItem(LS_ACTIVE_PAGE_KEY, this.activePage);
  }
}
