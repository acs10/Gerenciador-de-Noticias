import { TestBed } from '@angular/core/testing';

import { GerencDoService } from './gerencer.service';

describe('GerencDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GerencDoService = TestBed.get(GerencDoService);
    expect(service).toBeTruthy();
  });
});
