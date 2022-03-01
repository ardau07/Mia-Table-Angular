import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-selection-column',
  templateUrl: './selection-column.component.html',
  styleUrls: ['./selection-column.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectionColumnComponent extends BaseColumnComponent implements OnInit {

  @Input() selection!: SelectionModel<any>;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
