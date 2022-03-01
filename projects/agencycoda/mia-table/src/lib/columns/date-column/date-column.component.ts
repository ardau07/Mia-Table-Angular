import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-date-column',
  templateUrl: './date-column.component.html',
  styleUrls: ['./date-column.component.scss']
})
export class DateColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
