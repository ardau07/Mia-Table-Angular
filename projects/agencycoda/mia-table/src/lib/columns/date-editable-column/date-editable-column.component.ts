import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { BaseEditableColumnComponent } from '../base-editable-column.component';
import * as moment from 'moment';

@Component({
  selector: 'mia-date-editable-column',
  templateUrl: './date-editable-column.component.html',
  styleUrls: ['./date-editable-column.component.scss']
})
export class DateEditableColumnComponent extends BaseEditableColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.createFormControl();
  }

  createFormControl() {
    // Get value
    let value = this.getFieldValueByKey(this.column.field_key);
    // Create Control
    this.input = new FormControl(moment(value, 'YYYY-MM-DD hh:mm:ss'));
    // Config listening
    this.input.valueChanges.subscribe((val: any) => {
      // Convert to String
      if(val != undefined && val != null){
        let result = val.format('YYYY-MM-DD hh:mm:ss');
        this.setFieldValueByKey(this.column.field_key, result);
      } else {
        this.setFieldValueByKey(this.column.field_key, '');
      }
      if(this.configEdit?.subject){
        this.configEdit?.subject.next(this.item);
      }
    });
  }
}
