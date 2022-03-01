import { Component, OnInit } from '@angular/core';
import { MoreColumnComponent } from '../more-column/more-column.component';

@Component({
  selector: 'mia-more-options-column',
  templateUrl: './more-options-column.component.html',
  styleUrls: ['./more-options-column.component.scss']
})
export class MoreOptionsColumnComponent extends MoreColumnComponent implements OnInit {

  actions = new Array<any>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.processActions();
  }

  processActions() {
    let val = this.getFieldValue();
    let actions = this.column.extra.actions[val];
    let defaultActions = this.column.extra.default;

    if(actions != undefined){
      this.actions = actions;
    } else if (defaultActions != undefined) {
      this.actions = defaultActions;
    }
  }

  getActions(): Array<any> {
    return [];
  }
}
