import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseColumnComponent } from '../base-column.component';

@Component({
  selector: 'mia-custom-column',
  templateUrl: './custom-column.component.html',
  styleUrls: ['./custom-column.component.scss']
})
export class CustomColumnComponent extends BaseColumnComponent implements OnInit {

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
    (<BaseColumnComponent>view.instance).column = this.column;
    (<BaseColumnComponent>view.instance).item = this.item;
    (<BaseColumnComponent>view.instance).config = this.config;
  }
}
