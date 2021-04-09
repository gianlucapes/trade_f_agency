import { TestBed } from '@angular/core/testing';

import { ImpiegatiService } from './impiegati.service';

describe('ImpiegatiService', () => {
  let service: ImpiegatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpiegatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
