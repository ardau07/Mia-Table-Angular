import { MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaColumn, MiaTableConfig, MiaTableEditableComponent, MiaTableEditableConfig } from 'projects/agencycoda/mia-table/src/public-api';
import { Subject } from 'rxjs';
import { CustomOneColumnComponent } from './custom-one-column/custom-one-column.component';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('tableEditable') tableEditable!: MiaTableEditableComponent;

  tableConfig: MiaTableConfig = new MiaTableConfig();

  tableEditableConfig: MiaTableEditableConfig = new MiaTableEditableConfig();
  tableDataEditable: Array<any> = [];

  mockData?: MiaPagination<any>;

  queryScroll = new MiaQuery();

  constructor(
    public testService: TestService
  ) {

  }

  ngOnInit(): void {
    this.loadConfig();
    this.loadConfigEditable();

    this.queryScroll.itemPerPage = 1;
  }

  onClickSave() {
    console.log(this.tableEditable.getDataItems());
  }

  loadConfigEditable() {
    this.tableDataEditable = [
      { title: 'Titulo 1', status: 4 },
      { title: 'Titulo 2', status: 4 },
      { title: 'Titulo 3', status: 1 },
      { title: 'Titulo 4', status: 4, date: '1989-08-25' },
      { title: 'Titulo 5', status: 2 },
      { title: 'Titulo 6', status: 4 },
    ];

    this.tableEditableConfig.hasAdd = true;
    this.tableEditableConfig.columns = [
      { key: 'title', type: MiaColumn.TYPE_INPUT_EDITABLE, field_key: 'title', title: 'Title' },
      { key: 'date', type: MiaColumn.TYPE_DATE_EDITABLE, field_key: 'date', title: 'Date' },
      {
        key: 'status', type: MiaColumn.TYPE_SELECT_EDITABLE, title: 'Estado', field_key: 'status', extra: {
          options: [
            { id: 0, title: 'Estado 1', color: 'warning' },
            { id: 1, title: 'Estado 2', color: 'error' },
            { id: 2, title: 'Estado 3', color: 'violet' },
            { id: 3, title: 'Estado 4', color: 'success' },
            { id: 4, title: 'Estado 5', color: 'blue' },
            { id: 5, title: 'Estado 6', color: 'cyan' },
            { id: 6, title: 'Estado 7', color: 'pink' },
            { id: 7, title: 'Estado 8', color: '' },
          ]
        }
      },
      { key: 'vendor', type: MiaColumn.TYPE_SELECT_SERVICE_EDITABLE, field_key: 'vendor_id', title: 'Vendor', extra: { service: this.testService, field_display: 'title', query: new MiaQuery() } },
      { key: 'remove', type: MiaColumn.TYPE_REMOVE_EDITABLE, title: '' },
    ];

    this.tableEditableConfig.subject = new Subject<any>();
    this.tableEditableConfig.subject.subscribe(res => {

    });
  }

  loadConfig() {
    this.tableConfig.service = this.testService;
    this.tableConfig.id = 'table-test';
    this.tableConfig.columns = [
      { key: 'selection', type: 'selection', title: '' },
      //{ key: 'id', type: 'string', title: 'ID', field_key: 'id' },
      { key: 'item-role', type: 'item-relation', title: 'Role', field_key: 'role_id', extra: { field_display: 'title', field_relation_id: 'id', service: this.testService, query: new MiaQuery() } },
      { key: 'photo', type: 'photo', title: 'Photo', field_key: 'photo' },
      { key: 'custom', type: 'custom', title: 'Custom', extra: { component: CustomOneColumnComponent } },
      {
        key: 'user', type: 'user', title: '# User', extra: {
          field_photo: 'photo', field_firstname: 'firstname', field_lastname: 'lastname', field_subtitle: 'role', field_is_online: 'is_online'
        }
      },
      { key: 'title', type: 'string', title: 'Titulo', field_key: 'title', extra: { conditional_field: 'status' } },
      {
        key: 'status', type: 'status', title: 'Estado', field_key: 'status', extra: {
          options: [
            { value: 0, title: 'Estado 1', color: 'warning' },
            { value: 1, title: 'Estado 2', color: 'error' },
            { value: 2, title: 'Estado 3', color: 'violet' },
            { value: 3, title: 'Estado 4', color: 'success' },
            { value: 4, title: 'Estado 5', color: 'blue' },
            { value: 5, title: 'Estado 6', color: 'cyan' },
            { value: 6, title: 'Estado 7', color: 'pink' },
            { value: 7, title: 'Estado 8', color: '' },
          ]
        }
      },
      { key: 'created_at', type: 'date', title: 'Created At', field_key: 'created_at' },
      {
        key: 'icon', type: 'icon-toggle', title: '', field_key: 'status', extra: {
          key_action: 'click-lock',
          options: [
            { value: 0, color: 'red', icon: 'lock' },
            { value: 1, color: '#000', icon: 'lock-open' },
          ]
        }
      },
      {
        key: 'array-example', type: MiaColumn.TYPE_ARRAY, title: 'Array', extra: {
          field_array_key: 'categories', field_print_key: 'title'
        }
      },
      {
        key: 'more', type: 'more', title: '', extra: {
          actions: [
            { icon: 'visibility', title: 'View', key: 'view' },
            { icon: 'create', title: 'Edit', key: 'edit' },
            { icon: 'delete', title: 'Delete', key: 'remove' },
          ]
        }
      },
      {
        key: 'more-option',
        type: MiaColumn.TYPE_MORE_OPTIONS,
        title: '',
        field_key: 'role_id',
        extra: {
          actions: {
            1: [
              { icon: 'create', title: 'Edit', key: 'edit' },
            ],
            4: [
              { icon: 'visibility', title: 'View', key: 'view' },
              { icon: 'create', title: 'Edit', key: 'edit' },
              { icon: 'delete', title: 'Delete', key: 'remove' },
            ]
          }
        }
      }
    ];

    this.tableConfig.loadingColor = 'red';
    this.tableConfig.hasEmptyScreen = true;
    this.tableConfig.emptyScreenTitle = 'No tenes cargado ningun elemento todavia';

    this.tableConfig.onClick.subscribe(result => {
      console.log('--ACTION--');
      console.log(result.key);
    });

    this.mockData = {
      current_page: 1,
      first_page_url: '',
      from: '',
      last_page: 1,
      last_page_url: '',
      next_page_url: '',
      path: '',
      per_page: 50,
      prev_page_url: '',
      to: '',
      total: 1,
      data: [
        {
          id: 1, role_id: 1, title: 'asdasdasd', firstname: 'Matias', lastname: 'Camiletti', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png', subtitle: 'Administrador', is_online: 0, status: 1, created_at: '1989-08-25 18:00:00'
        },
        {
          id: 2, role_id: 3, title: 'asdasdasd', firstname: 'Matias', lastname: 'Camiletti', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png', subtitle: 'Administrador', is_online: 0, status: 1, created_at: '1989-08-25 18:00:00', categories: [{ title: 'category One' }, { title: 'category Two' }]
        },
        {
          id: 3, role_id: 1, title: 'asdasdasd', firstname: 'Matias', lastname: 'Camiletti', photo: '', subtitle: 'Administrador', is_online: 0, created_at: '1989-08-25 18:00:00'
        },
        {
          id: 4, role_id: 4, title: 'asdasdasd', firstname: 'Matias', lastname: 'Camiletti', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png', subtitle: 'Administrador', is_online: 0, status: 1, created_at: '1989-08-25 18:00:00'
        }
      ]
    };
  }
}
