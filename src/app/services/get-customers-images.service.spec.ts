import { TestBed } from '@angular/core/testing';

import { GetCustomersImagesService } from './get-customers-images.service';

describe('GetCustomersImagesService', () => {
  let service: GetCustomersImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCustomersImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
