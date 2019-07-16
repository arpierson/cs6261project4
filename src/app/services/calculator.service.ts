import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateResistance(figure1: number, figure2: number, figure3: number, multiplier: number) {
    var figuresConcat = '' + figure1 + figure2 + figure3; 
    var figures = +figuresConcat;
    return figures * multiplier;
  }
}
