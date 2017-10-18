import { TestBed, inject } from '@angular/core/testing';

import { BrowserWindowReferenceService } from './browser-window-reference.service';

describe('BrowserWindowReferenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserWindowReferenceService]
    });
  });

  it('should be created', inject([BrowserWindowReferenceService], (service: BrowserWindowReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
