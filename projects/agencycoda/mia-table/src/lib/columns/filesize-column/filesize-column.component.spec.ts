import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesizeColumnComponent } from './filesize-column.component';

describe('FilesizeColumnComponent', () => {
  let component: FilesizeColumnComponent;
  let fixture: ComponentFixture<FilesizeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesizeColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesizeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
