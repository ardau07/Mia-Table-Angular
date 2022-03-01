import { Component, Input, OnInit } from '@angular/core';
import { MiaTableConfig } from '../../entities/mia-table-config';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-more-column',
  templateUrl: './more-column.component.html',
  styleUrls: ['./more-column.component.scss']
})
export class MoreColumnComponent extends BaseColumnComponent implements OnInit {
  
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  clickButton(itemAction: any, $event: UIEvent) {
    this.config!.onClick.next({ key: itemAction.key, item: this.item });
    $event.preventDefault();
    return false;
  }
}
