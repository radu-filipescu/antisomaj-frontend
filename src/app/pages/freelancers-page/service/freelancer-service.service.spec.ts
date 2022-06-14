import { TestBed } from '@angular/core/testing';

import { FreelancerServiceService } from './freelancer-service.service';

describe('FreelancerServiceService', () => {
  let service: FreelancerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
