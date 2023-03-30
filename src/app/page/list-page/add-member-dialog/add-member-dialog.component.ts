import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Member } from 'src/app/services/members/interfaces/member.interface';
import { CloseFn, Dialog } from 'src/app/ui-modules/dialog/interfaces/dialog.interface';

@Component({
  selector: 'grp-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements Dialog<undefined>, AfterViewInit {
  data: undefined;
  close!: CloseFn;

  @ViewChild('nameInput') private name!: ElementRef<HTMLInputElement>;

  form = this.fb.group({
    name: ['', Validators.required],
    expiresOn: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngAfterViewInit(): void {
    this.name.nativeElement.focus();
  }

  submit(): void {
    const values = this.form.value;

    if (!values.name)
      return;

    let expiresAt: Date | null = null;
    if (values['expiresOn']) {
      const parts = values['expiresOn'].split('-').map(p => Number(p));
      expiresAt = new Date(parts[0], parts[1] - 1, parts[2]);
    }

    const member: Member = {
      name: values['name'],
      expiresAt: expiresAt?.getTime()
    };

    this.close(member);
  }
}
