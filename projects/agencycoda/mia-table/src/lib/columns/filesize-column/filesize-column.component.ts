import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'lib-filesize-column',
  templateUrl: './filesize-column.component.html',
  styleUrls: ['./filesize-column.component.scss']
})
export class FilesizeColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  bytesToString() {
    
  }
}
