import { TestBed } from '@angular/core/testing';

import { ServiceListeLivreService } from './service-liste-livre.service';

describe('ServiceListeLivreService', () => {
  let service: ServiceListeLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListeLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
