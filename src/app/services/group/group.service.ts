import { Injectable } from '@angular/core';
import { MembersService } from '../members/members.service';

export interface Group {
  id: string;
  members: string[];
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private membersPerGroupStorageKey = 'MEMBERS_PER_GROUP';
  private _groupsCount: number;
  private _groups?: Group[];

  get count(): number {
    return this._groupsCount;
  }

  set count(value: number) {
    this._groupsCount = value;
    localStorage.setItem(this.membersPerGroupStorageKey, value.toString());
  }

  get membersPerGroup(): number {
    return this.members.count/this._groupsCount;
  }
  
  get groups(): Group[] {
    return this._groups ? [...this._groups] : [];
  }

  constructor(private members: MembersService) {
    this._groupsCount = Number(localStorage.getItem(this.membersPerGroupStorageKey)) || 1;
  }

  setGroups(shuffledMembers: string[]): void {
    this._groups = Array(this._groupsCount)
      .fill('A')
      .map((id, idx) => ({
        id: String.fromCharCode(id.charCodeAt(0) + idx),
        members: []
      }));

    let lastIndex = -1;

    while (shuffledMembers.length) {
      for (const group of this._groups) {
        let memberIdx;
        while (true) {
          memberIdx = Math.floor(Math.random() * shuffledMembers.length);
          if (shuffledMembers.length === 1 || memberIdx !== lastIndex)
            break;
        }

        group.members.push(shuffledMembers.splice(memberIdx, 1)[0]);
        lastIndex = memberIdx;

        if (!shuffledMembers.length)
          break;
      }      
    }

    this._groups.forEach(g => g.members.sort());
  }
}
