import { TestBed } from '@angular/core/testing';

import { HouseRepositoryDummyImpl } from './house-repository-dummy-impl.service';

describe('HouseRepositoryDummyImplService', () => {
  let service: HouseRepositoryDummyImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseRepositoryDummyImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
