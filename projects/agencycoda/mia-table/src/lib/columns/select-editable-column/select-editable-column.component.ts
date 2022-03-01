import { Component, OnInit } from '@angular/core';
import { BaseEditableColumnComponent } from '../base-editable-column.component';

@Component({
  selector: 'mia-select-editable-column',
  templateUrl: './select-editable-column.component.html',
  styleUrls: ['./select-editable-column.component.scss']
})
export class SelectEditableColumnComponent extends BaseEditableColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.createFormControl();
  }

}
