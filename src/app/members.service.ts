import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private membersStorageKey = 'MEMBERS';
  private members: string[];

  private membersPerGroupStorageKey = 'MEMBERS_PER_GROUP';
  private membersPerGroup: number;

  constructor() {
    const membersString = localStorage.getItem(this.membersStorageKey);

    this.members = membersString ? JSON.parse(membersString) : [];

    this.membersPerGroup = Number(localStorage.getItem(this.membersPerGroupStorageKey)) || 1;
  }

  get list(): string[] {
    return [...this.members];
  }

  get count(): number {
    return this.members.length;
  }

  get perGroup(): number {
    return this.membersPerGroup;
  }

  set perGroup(value: number) {
    this.membersPerGroup = value;
    localStorage.setItem(this.membersPerGroupStorageKey, value.toString());
  }

  push(member: string): void {
    this.members.push(member);
    this.saveAndSort();
  }

  remove(idx: number): void {
    this.members.splice(idx, 1);
    this.saveAndSort();
  }

  private saveAndSort(): void {
    this.members.sort();
    localStorage.setItem(this.membersStorageKey, JSON.stringify(this.members));
  }
}
