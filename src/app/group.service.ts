import { Injectable } from '@angular/core';
import { MembersService } from './members.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private membersPerGroupStorageKey = 'MEMBERS_PER_GROUP';
  private _groupsCount: number;

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
  
  constructor(private members: MembersService) {
    this._groupsCount = Number(localStorage.getItem(this.membersPerGroupStorageKey)) || 1;
  }

  setGroups(shuffledMembers: string[]): void {
    console.log(shuffledMembers);
  }
}
