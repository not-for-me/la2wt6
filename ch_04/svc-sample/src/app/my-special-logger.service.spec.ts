/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MySpecialLoggerService } from './my-special-logger.service';

describe('Service: MySpecialLogger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySpecialLoggerService]
    });
  });

  it('should ...', inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
