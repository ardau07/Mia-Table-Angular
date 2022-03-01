import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconToggleColumnComponent } from './icon-toggle-column.component';

describe('IconToggleColumnComponent', () => {
  let component: IconToggleColumnComponent;
  let fixture: ComponentFixture<IconToggleColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconToggleColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconToggleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
