import { Component, Input, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { StorageMap } from '@ngx-pwa/local-storage';
import { MiaTableConfig } from '../../entities/mia-table-config';
import { MiaTableComponent, MIA_TABLE_KEY_STORAGE_COLUMNS } from '../mia-table/mia-table.component';

@Component({
  selector: 'mia-edit-columns',
  templateUrl: './mia-edit-columns.component.html',
  styleUrls: ['./mia-edit-columns.component.scss']
})
export class MiaEditColumnsComponent implements OnInit {

  @Input() config = new MiaTableConfig();
  @Input() miaTable!: MiaTableComponent;

  constructor(
    protected storage: StorageMap
  ) { }

  ngOnInit(): void {
  }

  saveColumns() {
    let data = new Array<boolean>();
    for (const column of this.config.columns) {
      data.push(column.isShow!);
    }

    this.storage.set(MIA_TABLE_KEY_STORAGE_COLUMNS + this.config.id, data, { type: 'array', items: { type: 'boolean' }}).subscribe(result => {});
  }

  onChange(event: MatSelectionListChange) {
    if(event.options[0].selected){
      event.options[0].value.isShow = true;
    } else {
      event.options[0].value.isShow = false;
    }

    this.miaTable.processDisplayColumns();
    this.saveColumns();
  }
}
