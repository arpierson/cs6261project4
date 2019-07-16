import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private resistorValues:  number[];

  constructor() {
    this.resistorValues = [0, 0, 0, 1, 1];
   }

  calculateResistance(): number {
    var figuresConcat = '' + this.resistorValues[0] + this.resistorValues[1] + this.resistorValues[2]; 
    var figures = +figuresConcat;
    return figures * this.resistorValues[3];
  }

  replaceValue(index: number, newValue: number) {
    this.resistorValues[index] = newValue;
  }

  getTolerance(): number {
    return this.resistorValues[4];
  }
}
