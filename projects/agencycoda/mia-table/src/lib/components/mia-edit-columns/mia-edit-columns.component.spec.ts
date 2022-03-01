import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaEditColumnsComponent } from './mia-edit-columns.component';

describe('MiaEditColumnsComponent', () => {
  let component: MiaEditColumnsComponent;
  let fixture: ComponentFixture<MiaEditColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaEditColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaEditColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
