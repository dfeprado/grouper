import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group/group.service';
import { MembersService } from 'src/app/services/members/members.service';

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
    private group: GroupService,
    private router: Router
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
    this.router.navigate(['/groups']);
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.shufflintTimeout);
  }
}
