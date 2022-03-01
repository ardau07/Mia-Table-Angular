import { TestBed } from '@angular/core/testing';

import { MiaTableService } from './mia-table.service';

describe('MiaTableService', () => {
  let service: MiaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
