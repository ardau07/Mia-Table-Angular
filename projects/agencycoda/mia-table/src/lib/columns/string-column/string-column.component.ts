import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-string-column',
  templateUrl: './string-column.component.html',
  styleUrls: ['./string-column.component.css']
})
export class StringColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getConditionalFieldValue(): any {
    return this.getFieldValueByKey(this.column.extra.conditional_field);
  }
}
