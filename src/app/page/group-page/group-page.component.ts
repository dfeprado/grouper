import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/group.service';

@Component({
  selector: 'grp-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent {
  constructor(
    public group: GroupService,
  )  {}
}
