import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { TableAnimation } from '../../animations/table-animation';
import { MiaTableConfig } from '../../entities/mia-table-config';
import { MiaPagination } from '@agencycoda/mia-core';
import { PageEvent } from '@angular/material/paginator';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';

export const MIA_TABLE_KEY_STORAGE_COLUMNS = 'mia_table.columns_';

@Component({
  selector: 'mia-table',
  templateUrl: './mia-table.component.html',
  styleUrls: ['./mia-table.component.scss'],
  animations: [
    TableAnimation.componentAnimation
  ]
})
export class MiaTableComponent implements OnInit {

  @Input() config = new MiaTableConfig();
  @Input() mockData: MiaPagination<any> | undefined;

  @Output() isLoading = new EventEmitter<boolean>();
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() loadDataCompleted = new EventEmitter<any>();

  selection = new SelectionModel<any>(true, [], true);
  dataItems?: MiaPagination<any>;
  displayColumns: Array<String> = [];
  _isLoading = true;
  _isFirstLoad = true;

  constructor(
    protected storage: StorageMap
  ) { }

  ngOnInit(): void {
    this.verifyIfSavedColumnsEdit();
    this.loadMocks();
    this.loadItems();
  }

  onClickSelect() {
    
  }

  onClickItem(item: any) {
    this.config.onClick.next({ key: 'click-row', item: item });
  }

  onClickDeleteBulk() {
    this.config.onClick.next({ key: 'delete-bulk', item: this.selection.selected });
    this.selection.clear();
  }

  loadWithObservable(serviceOb: Observable<MiaPagination<any>>) {
    this.setStartLoading();
    serviceOb.subscribe(result => {
      this.dataItems = result;
      this.processFirstLoad();
      this.setEndLoading();
      this.loadDataCompleted.emit(result);
    });
  }

  loadWithPromise(servicePromise: Promise<MiaPagination<any>>) {
    this.setStartLoading();
    servicePromise.then(result => {
      this.dataItems = result;
      this.processFirstLoad();
      this.setEndLoading();
      this.loadDataCompleted.emit(result);
    });
  }

  loadItemsWithExtra(params: any) {
    if(this.config.service == undefined){
      return;
    }
    
    this.loadWithPromise(this.config.service.listWithExtras(this.config.query, params));
  }

  loadItems() {
    this.loadItemsWithExtra({});
  }

  onPageChange(event: PageEvent) {
    this.config.query.itemPerPage = event.pageSize;
    this.config.query.pageCurrent = event.pageIndex + 1;
    this.pageChange.emit(event);
    this.loadItems();
  }

  verifyIfSavedColumnsEdit() {
    // Verify if has ID table
    if(this.config.id == undefined || this.config.id == ''){
      this.showAllColumns();
      return;
    }
    // Verify if saved edit columns
    this.storage.get<Array<boolean>>(MIA_TABLE_KEY_STORAGE_COLUMNS + this.config.id, { type: 'array', items: { type: 'boolean' }}).subscribe(result => {
      if(result == undefined){
        this.showAllColumns();
        return;
      }
      console.log('--Storage--');
      console.log(result);

      if(result.length != this.config.columns.length){
        this.showAllColumns();
        return;
      }

      for (let i = 0; i < result.length; i++) {
        const isShow = result[i];
        this.config.columns[i].isShow = isShow;
      }

      this.processDisplayColumns();
    });
  }

  showAllColumns() {
    this.config.columns.forEach(c => {
      c.isShow = true;
    });
    this.processDisplayColumns();
  }

  processDisplayColumns() {
    this.displayColumns = new Array<String>();
    for (const column of this.config.columns) {
      if(column.isShow){
        this.displayColumns.push(column.key);
      }
    }
  }

  loadMocks() {
    if(this.mockData){
      this.dataItems = this.mockData;
      this.setEndLoading();
    }
  }

  processFirstLoad() {
    if(!this._isFirstLoad){
      return;
    }

    this._isFirstLoad = false;
    if(this.dataItems!.total > 0){
      this.config.hasEmptyScreen = false;
    }
  }
  
  setStartLoading() {
    this._isLoading = true;
    this.isLoading.emit(true);
  }

  setEndLoading() {
    this._isLoading = false;
    this.isLoading.emit(false);
  }
}
