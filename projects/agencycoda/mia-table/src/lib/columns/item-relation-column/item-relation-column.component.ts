import { MiaBaseCrudHttpService, MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-item-relation-column',
  templateUrl: './item-relation-column.component.html',
  styleUrls: ['./item-relation-column.component.scss']
})
export class ItemRelationColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.loadItems();
  }

  getTitle(): string {
    if(this.column.extra.options == undefined){
      return 'loading...';
    }

    let value = this.getFieldValue();
    for (const item of this.column.extra.options) {
      if(item[this.column.extra.field_relation_id] == value){
        return item[this.column.extra.field_display];
      }
    }
    return '';
  }

  loadItems() {
    if(this.column.extra.options != undefined || this.column.extra.isSearching){
      return;
    }

    this.column.extra.isSearching = true;

    let query = this.column.extra.query;
    if(query == undefined){
      query = new MiaQuery();
    }

    let service: MiaBaseCrudHttpService<any> = this.column.extra.service;
    service.listOb(query).subscribe(result => {
      this.column.extra.options = result.data;
    });
  }
}
