import { TestBed } from '@angular/core/testing';

import { KmiService } from './kmi.service';

describe('KmiService', () => {
  let service: KmiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KmiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
