import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  var calculatorService = new CalculatorService();

  beforeEach(() => TestBed.configureTestingModule({
    providers: [CalculatorService]
  }));

  beforeEach(inject([CalculatorService], (service: CalculatorService) => {
    calculatorService = service;
  }));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });
});
