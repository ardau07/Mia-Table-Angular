import { Component, OnInit } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-user-column',
  templateUrl: './user-column.component.html',
  styleUrls: ['./user-column.component.scss']
})
export class UserColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getFirstname() {
    if(this.column.extra?.field_firstname){
      return this.getFieldValueByKey(this.column.extra?.field_firstname);
    }

    return '';
  }

  getLastname() {
    if(this.column.extra?.field_lastname){
      return this.getFieldValueByKey(this.column.extra?.field_lastname);
    }

    return '';
  }

  getFullname() {
    return this.getFirstname() + ' ' + this.getLastname();
  }

  getPhoto() {
    if(this.column.extra?.field_photo){
      return this.getFieldValueByKey(this.column.extra?.field_photo);
    }

    return '';
  }

  getSubtitle() {
    if(this.column.extra?.field_subtitle){
      return this.getFieldValueByKey(this.column.extra?.field_subtitle);
    }

    return '';
  }

  isOnline() {
    if(this.column.extra?.field_is_online){
      return this.getFieldValueByKey(this.column.extra?.field_is_online);
    }

    return false;
  }
}
