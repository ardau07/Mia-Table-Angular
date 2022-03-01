import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserColumnComponent } from './user-column.component';

describe('UserColumnComponent', () => {
  let component: UserColumnComponent;
  let fixture: ComponentFixture<UserColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
