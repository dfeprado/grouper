import { Component } from '@angular/core';
import { Dialog } from 'src/app/ui-modules/dialog/interfaces/dialog.interface';

@Component({
  selector: 'grp-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements Dialog<undefined> {
  data: undefined;
}
