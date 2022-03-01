import { MiaBaseCrudHttpService, MiaQuery, MiaDataResultService } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseEditableColumnComponent } from '../base-editable-column.component';

@Component({
  selector: 'mia-select-service-editable-column',
  templateUrl: './select-service-editable-column.component.html',
  styleUrls: ['./select-service-editable-column.component.scss']
})
export class SelectServiceEditableColumnComponent extends BaseEditableColumnComponent implements OnInit {

  items: Array<any> = [];

  constructor(
    protected dataResultService: MiaDataResultService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadItems();
    this.createFormControl();
  }

  getDisplayItem(item: any, key: string) {
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

  loadItems() {
    // Verify if has extra params
    let extraParams = this.column.extra.extraParams;
    if(extraParams == undefined){
      extraParams = {};
    }

    let query: MiaQuery = this.column.extra.query;
    query.itemPerPage = 5000;
    let service: MiaBaseCrudHttpService<any> = this.column.extra.service;

    let dataResultId = this.column.extra?.dataResultId;
    if(dataResultId == undefined){
      dataResultId = this.column.key + '-items';
    }

    this.dataResultService.execute<Array<any>>(dataResultId, service.listOb(query).pipe(map(re => {
      return re.data;
     }))).subscribe(result => {
       this.items = result;
    });
  }
}

