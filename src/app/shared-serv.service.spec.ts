import { TestBed } from '@angular/core/testing';

import { SharedServService } from './shared-serv.service';

describe('SharedServService', () => {
  let service: SharedServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
