import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-photo-column',
  templateUrl: './photo-column.component.html',
  styleUrls: ['./photo-column.component.scss']
})
export class PhotoColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
