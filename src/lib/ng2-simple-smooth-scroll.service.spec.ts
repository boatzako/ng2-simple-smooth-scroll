import { TestBed } from '@angular/core/testing';

import { SimpleSmoothScrollService  } from './ng2-simple-smooth-scroll.service';

describe('SimpleSmoothScrollService ', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleSmoothScrollService  = TestBed.get(SimpleSmoothScrollService );
    expect(service).toBeTruthy();
  });
});
