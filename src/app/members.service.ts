import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private membersStorageKey = 'MEMBERS';
  private members: string[];

  constructor() {
    const membersString = localStorage.getItem(this.membersStorageKey);

    this.members = membersString ? JSON.parse(membersString) : [];

  }

  get list(): string[] {
    return [...this.members];
  }

  get count(): number {
    return this.members.length;
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

  shuffle(): string[] {
    const shuffledMembers: string[] = [];
    const members = this.list;
    let lastIndex = -1;

    while (members.length) {
      const idx = Math.floor(Math.random() * members.length);
      if (idx === lastIndex && members.length > 1)
        continue;

      lastIndex = idx;
      shuffledMembers.push(members.splice(idx, 1)[0]);
    }
    
    return shuffledMembers;
  }
}
