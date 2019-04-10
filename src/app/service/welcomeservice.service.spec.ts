import { TestBed } from '@angular/core/testing';

import { WelcomeserviceService } from './welcomeservice.service';

describe('WelcomeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeserviceService = TestBed.get(WelcomeserviceService);
    expect(service).toBeTruthy();
  });
});
