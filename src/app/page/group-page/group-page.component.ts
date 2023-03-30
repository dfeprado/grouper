import { Component } from '@angular/core';
import { GroupService } from 'src/app/services/group/group.service';

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
