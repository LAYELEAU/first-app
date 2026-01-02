import { TestBed } from '@angular/core/testing';

import { Logement } from './logement';

describe('Logement', () => {
  let service: Logement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
