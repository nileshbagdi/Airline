import { TestBed } from '@angular/core/testing';

import { SeatbookingserviceService } from './seatbookingservice.service';

describe('SeatbookingserviceService', () => {
  let service: SeatbookingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatbookingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
