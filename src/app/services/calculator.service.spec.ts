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

  it('should have the default values in the array', () => {
    let resistorValues = calculatorService.getResistorValues();
    expect(resistorValues.length).toEqual(5);
    expect(resistorValues[0]).toEqual(0);
    expect(resistorValues[1]).toEqual(0);
    expect(resistorValues[2]).toEqual(0);
    expect(resistorValues[3]).toEqual(1);
    expect(resistorValues[4]).toEqual(1);
  });

  it('should change array values', () => {
    calculatorService.replaceValue(0, 9);
    let resistorValues = calculatorService.getResistorValues();
    expect(resistorValues[0]).toEqual(9);
  });

  it('should change multiple array values', () => {
    calculatorService.replaceValue(0, 9);
    calculatorService.replaceValue(1, 8);
    calculatorService.replaceValue(2, 7);
    calculatorService.replaceValue(3, 6);
    calculatorService.replaceValue(4, 5);
    let resistorValues = calculatorService.getResistorValues();
    expect(resistorValues[0]).toEqual(9);
    expect(resistorValues[1]).toEqual(8);
    expect(resistorValues[2]).toEqual(7);
    expect(resistorValues[3]).toEqual(6);
    expect(resistorValues[4]).toEqual(5);
  });

  it('should return the tolerance value', () => {
    let toleranceValue = calculatorService.getTolerance();
    expect(toleranceValue).toEqual(1);
  });
});
