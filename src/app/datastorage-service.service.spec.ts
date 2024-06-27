import { TestBed } from '@angular/core/testing';

import { DatastorageServiceService } from './datastorage-service.service';

describe('DatastorageServiceService', () => {
  let service: DatastorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
