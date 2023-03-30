import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { GroupService } from 'src/app/services/group/group.service';
import { Member } from 'src/app/services/members/interfaces/member.interface';
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
    private dialog: DialogService,
    private cd: ChangeDetectorRef
  ) {}
  
  addMember(): void {
    this.dialog.open<Member>({
      component: AddMemberDialogComponent,
      disableDispose: true
    }).subscribe(m => {
      if (!m)
        return;

      this.members.push(m);
      this.cd.markForCheck();
    })
  }

  remove(idx: number, member: string): void {
    if (!confirm(`Tem certeza que quer remover ${member}?`))
      return;

    this.members.remove(idx);
  }

  updateGroups(input: EventTarget | null): void {
    if (!input)
      return;

    const value = Number((input as HTMLInputElement).value);
    if (Number.isNaN(value))
      return;

    this.group.count = Number(value);
  }
}
