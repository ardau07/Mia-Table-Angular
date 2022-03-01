import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseEditableColumnComponent } from '../base-editable-column.component';

@Component({
  selector: 'mia-remove-editable-column',
  templateUrl: './remove-editable-column.component.html',
  styleUrls: ['./remove-editable-column.component.scss']
})
export class RemoveEditableColumnComponent extends BaseEditableColumnComponent implements OnInit {

  @Output() remove = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onClickRemove() {
    this.remove.emit(this.item);
  }
}
