import { TestBed } from '@angular/core/testing';

import { CustservicesService } from './custservices.service';

describe('CustservicesService', () => {
  let service: CustservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
