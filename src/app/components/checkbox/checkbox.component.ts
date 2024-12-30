import { Component, input, Input, output } from '@angular/core';

@Component({
  selector: 'grp-checkbox',
  imports: [],
  template: `
    <label class="container">
        <input type="checkbox" (change)="onCheck.emit(value())">
        <span class="checkmark"></span>
        <ng-content/>
    </label>
  `,
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  value = input<any>()
  onCheck = output<any>() 
}
