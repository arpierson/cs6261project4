import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private resistorValues: { [key: string]: number };

  constructor() {
    this.resistorValues = {"figure1": 0, "figure2": 0, "figure3": 0, "multiplier": 1, "tolerance": 1};
   }

  calculateResistance(): number {
    var figuresConcat = '' + this.resistorValues[0].valueOf() + this.resistorValues[1].valueOf() + this.resistorValues[2].valueOf(); 
    var figures = +figuresConcat;
    return figures * this.resistorValues[3].valueOf();
  }

  getTolerance(): number {
    return this.resistorValues[4].valueOf();
  }
}
