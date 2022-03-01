import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoColumnComponent } from './photo-column.component';

describe('PhotoColumnComponent', () => {
  let component: PhotoColumnComponent;
  let fixture: ComponentFixture<PhotoColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
