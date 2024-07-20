import { TestBed } from '@angular/core/testing';

import { NavserviceService } from './navservice.service';

describe('NavserviceService', () => {
  let service: NavserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
