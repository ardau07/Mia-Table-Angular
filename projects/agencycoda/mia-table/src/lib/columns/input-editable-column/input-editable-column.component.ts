import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseEditableColumnComponent } from '../base-editable-column.component';

@Component({
  selector: 'mia-input-editable-column',
  templateUrl: './input-editable-column.component.html',
  styleUrls: ['./input-editable-column.component.scss']
})
export class InputEditableColumnComponent extends BaseEditableColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.createFormControl();
  }
}
