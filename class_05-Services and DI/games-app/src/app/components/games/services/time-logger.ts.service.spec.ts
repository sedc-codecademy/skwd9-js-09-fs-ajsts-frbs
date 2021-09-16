import { TestBed } from '@angular/core/testing';

import { TimeLogger.TsService } from './time-logger.ts.service';

describe('TimeLogger.TsService', () => {
  let service: TimeLogger.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeLogger.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
