import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-status-column',
  templateUrl: './status-column.component.html',
  styleUrls: ['./status-column.component.scss']
})
export class StatusColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getTitle(): string {
    let value = this.getFieldValue();
    for (const item of this.column.extra.options) {
      if(item.value == value){
        return item.title;
      }
    }
    return '';
  }

  getClass(): string {
    let value = this.getFieldValue();
    for (const item of this.column.extra.options) {
      if(item.value == value){
        return item.color;
      }
    }
    return '';
  }
}
