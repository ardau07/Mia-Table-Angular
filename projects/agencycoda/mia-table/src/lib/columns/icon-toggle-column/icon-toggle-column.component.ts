import { Component, Input, OnInit } from '@angular/core';
import { MiaTableConfig } from '../../entities/mia-table-config';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-icon-toggle-column',
  templateUrl: './icon-toggle-column.component.html',
  styleUrls: ['./icon-toggle-column.component.scss']
})
export class IconToggleColumnComponent extends BaseColumnComponent implements OnInit {

  @Input() config!: MiaTableConfig;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  clickButton($event: any) {
    this.config.onClick.next({ key: this.column.extra.key_action, item: this.item });
    $event.stopPropagation();
    $event.preventDefault();
    return false;
  }

  getColor(): string {
    let value = this.getFieldValue();
    for (const item of this.column.extra.options) {
      if(item.value == value){
        return item.color;
      }
    }

    return '';
  }

  getIcon(): string {
    let value = this.getFieldValue();
    for (const item of this.column.extra.options) {
      if(item.value == value){
        return item.icon;
      }
    }
    return '';
  }
}
