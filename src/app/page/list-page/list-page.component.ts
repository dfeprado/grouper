import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MembersService } from 'src/app/members.service';

@Component({
  selector: 'grp-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent {
  constructor(public members: MembersService) {}
  
  addMember(): void {
    const member = prompt('Qual é o nome do membro?');
    if (!member)
      return;

    this.members.push(member);
  }

  remove(idx: number, member: string): void {
    if (!confirm(`Tem certeza que quer remover ${member}?`))
      return;

    this.members.remove(idx);
  }

  calculateMembersPerGroup(): number {
    return this.members.count/this.members.perGroup;
  }
}
