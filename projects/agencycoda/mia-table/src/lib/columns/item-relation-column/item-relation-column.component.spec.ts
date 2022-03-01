import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRelationColumnComponent } from './item-relation-column.component';

describe('ItemRelationColumnComponent', () => {
  let component: ItemRelationColumnComponent;
  let fixture: ComponentFixture<ItemRelationColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRelationColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRelationColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
