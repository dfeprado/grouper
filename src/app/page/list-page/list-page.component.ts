import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GroupService } from 'src/app/services/group/group.service';
import { MembersService } from 'src/app/services/members/members.service';
import { DialogService } from 'src/app/ui-modules/dialog/dialog.service';
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';

@Component({
  selector: 'grp-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent {
  constructor(
    public members: MembersService,
    public group: GroupService,
    private dialog: DialogService
  ) {}
  
  addMember(): void {
    this.dialog.open<undefined>({
      component: AddMemberDialogComponent
    });
    // const member = prompt('Qual é o nome do membro?');
    // if (!member)
    //   return;

    // this.members.push(member);
  }

  remove(idx: number, member: string): void {
    if (!confirm(`Tem certeza que quer remover ${member}?`))
      return;

    this.members.remove(idx);
  }
}
