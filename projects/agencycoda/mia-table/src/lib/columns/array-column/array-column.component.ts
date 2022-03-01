import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-array-column',
  templateUrl: './array-column.component.html',
  styleUrls: ['./array-column.component.scss']
})
export class ArrayColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getFieldValueByKeyAndItem(item: any): any {
    let key = this.column.extra.field_print_key;
    if(key == undefined){
      return '';
    }

    if (typeof key == 'string' && item[key] != undefined) {
      return item[key];
    }

    let valueFinal = item;
    for (const keyObj of key!) {
      if(valueFinal[keyObj] == undefined){
        return '';
      }
      valueFinal = valueFinal[keyObj];
    }
    return valueFinal;
  }

  getArray(): Array<any> {
    return this.item[this.column.extra.field_array_key];
  }
}