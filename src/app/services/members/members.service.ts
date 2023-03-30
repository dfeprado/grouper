import { Injectable } from '@angular/core';
import { Member } from './interfaces/member.interface';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private membersStorageKey = 'MEMBERS';
  private members!: Member[];

  constructor() {
    const membersString = localStorage.getItem(this.membersStorageKey);

    this.parseMembers(membersString);
  }

  private parseMembers(membersString: string | null): void {
    const members = membersString ? JSON.parse(membersString) as any[] : [];

    if (!members.length) {
      this.members = members;
    } else {
      if (typeof members[0] === 'string') {
        this.members = members.map(m => ({name: m}));
        this.saveAndSort();
      } else {
        this.members = members;
      }
    }
  }

  get listMemberNames(): string[] {
    return this.members.map(m => m.name);
  }

  get list(): Member[] {
    return [...this.members];
  }

  get count(): number {
    return this.members.length;
  }

  push(member: string): void;
  push(member: Member): void;
  push(member: Member | string): void {
    this.members.push(typeof member === 'string' ? {name: member} : member);
    this.saveAndSort();
  }

  remove(idx: number): void {
    this.members.splice(idx, 1);
    this.saveAndSort();
  }

  private saveAndSort(): void {
    this.members.sort((a, b) => {
      if (a.name > b.name)
        return 1;
      else if (a.name === b.name)
        return 0;
      else
        return -1;
    });
    localStorage.setItem(this.membersStorageKey, JSON.stringify(this.members));
  }

  shuffle(): string[] {
    const shuffledMembers: string[] = [];
    const members = this.listMemberNames;
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
