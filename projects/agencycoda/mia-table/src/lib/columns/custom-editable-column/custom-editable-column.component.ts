import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseEditableColumnComponent } from '../base-editable-column.component';

@Component({
  selector: 'mia-custom-editable-column',
  templateUrl: './custom-editable-column.component.html',
  styleUrls: ['./custom-editable-column.component.scss']
})
export class CustomEditableColumnComponent extends BaseEditableColumnComponent implements OnInit {

  @ViewChild('contentColumn') contentColumn?: ElementRef;

  constructor(
    protected factoryResolver: ComponentFactoryResolver,
    protected viewContainerRef: ViewContainerRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.generateComponent();
  }

  generateComponent() {
    const component = this.factoryResolver.resolveComponentFactory(this.column.extra.component);
    
    const view = this.viewContainerRef.createComponent(component);
    (<BaseEditableColumnComponent>view.instance).column = this.column;
    (<BaseEditableColumnComponent>view.instance).item = this.item;
    (<BaseEditableColumnComponent>view.instance).configEdit = this.configEdit;
  }
}
