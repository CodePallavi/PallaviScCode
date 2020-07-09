import { TestBed } from '@angular/core/testing';

import { DatasvcService } from './datasvc.service';

describe('DatasvcService', () => {
  let service: DatasvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
