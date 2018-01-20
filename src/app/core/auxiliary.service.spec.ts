import { TestBed, inject } from '@angular/core/testing';

import { AuxiliaryService } from './auxiliary.service';

describe('AuxiliaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuxiliaryService]
    });
  });

  it('should be created', inject([AuxiliaryService], (service: AuxiliaryService) => {
    expect(service).toBeTruthy();
  }));
});
