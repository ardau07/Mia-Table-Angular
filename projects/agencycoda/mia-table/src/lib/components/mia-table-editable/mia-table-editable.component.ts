import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableAnimation } from '../../animations/table-animation';
import { MiaTableEditableConfig } from '../../entities/mia-table-editable-config';

@Component({
  selector: 'mia-table-editable',
  templateUrl: './mia-table-editable.component.html',
  styleUrls: ['./mia-table-editable.component.scss'],
  animations: [
    TableAnimation.componentAnimation
  ]
})
export class MiaTableEditableComponent implements OnInit {

  @Input() config = new MiaTableEditableConfig();
  @Input() dataItems?: Array<any>;

  displayColumns: Array<String> = [];
  dataSource = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit(): void {
    this.processDisplayColumns();
    this.processData();
  }

  onClickAdd() {
    this.dataItems?.push({});
    this.dataSource.data = this.dataItems!;
  }

  onRemove(item: any) {
    let index = this.dataItems?.indexOf(item);
    if(index != undefined && index != -1){
      this.dataItems?.splice(index, 1);
    }
    this.processData();
  }

  getDataItems() {
    return this.dataItems;
  }

  processDisplayColumns() {
    this.displayColumns = new Array<String>();
    for (const column of this.config.columns) {
        this.displayColumns.push(column.key);
    }
  }

  processData() {
    this.dataSource.data = this.dataItems!;
  }
}
