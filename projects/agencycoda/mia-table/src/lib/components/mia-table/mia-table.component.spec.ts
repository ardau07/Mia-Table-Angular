import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaTableComponent } from './mia-table.component';

describe('MiaTableComponent', () => {
  let component: MiaTableComponent;
  let fixture: ComponentFixture<MiaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
