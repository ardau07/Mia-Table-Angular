import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'lib-select-column',
  templateUrl: './select-column.component.html',
  styleUrls: ['./select-column.component.scss']
})
export class SelectColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
