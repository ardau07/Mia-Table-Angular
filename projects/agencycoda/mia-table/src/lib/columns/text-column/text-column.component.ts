import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-text-column',
  templateUrl: './text-column.component.html',
  styleUrls: ['./text-column.component.scss']
})
export class TextColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getFieldValue(): any {
    let val = super.getFieldValueByKey(this.column.field_key);

    if(this.column.extra.truncate && this.column.extra.truncate > 0){
      return (val.length > this.column.extra.truncate) ? val.substr(0, this.column.extra.truncate-1).trim() + '...' : val;
    }

    return val;
  }
  
}
