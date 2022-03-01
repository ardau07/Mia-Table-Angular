import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaInfiniteScrollServiceComponent } from './mia-infinite-scroll-service.component';

describe('MiaInfiniteScrollServiceComponent', () => {
  let component: MiaInfiniteScrollServiceComponent;
  let fixture: ComponentFixture<MiaInfiniteScrollServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaInfiniteScrollServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaInfiniteScrollServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
