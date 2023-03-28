import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group.service';
import { MembersService } from 'src/app/members.service';

@Component({
  selector: 'grp-member-shuffle-page',
  templateUrl: './member-shuffle-page.component.html',
  styleUrls: ['./member-shuffle-page.component.scss']
})
export class MemberShufflePageComponent implements OnInit, OnDestroy {
  private shufflintTimeout: number = 0;
  shuffled!: string[];
  
  constructor(
    private members: MembersService,
    private group: GroupService
  ) {}

  ngOnInit(): void {
    this.shuffle();
  }

  private shuffle(): void {
    this.shuffled = this.members.shuffle();
    this.shufflintTimeout = window.setTimeout(() => this.shuffle(), 200);
  }

  done(): void {
    this.group.setGroups(this.shuffled);
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.shufflintTimeout);
  }
}
