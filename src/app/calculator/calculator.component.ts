import { Component, OnInit } from '@angular/core';

import {CalculatorService} from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public resistanceValue: number;
  public toleranceValue: number;

  constructor(private calculatorService: CalculatorService) { }

  setResistance() {
    this.resistanceValue = this.calculatorService.calculateResistance();
  }

  setTolerance() {
    this.resistanceValue = this.calculatorService.getTolerance();
  }

  replaceValue(index: number, value: number) {
    this.calculatorService.replaceValue(index, value);
  }

  convertColorToDigitValue(color: string): number {
    switch (color) {
      case 'black': {
        return 0;
      }
      case 'brown': {
        return 1;
      }
      case 'red': {
        return 2;
      }
      case 'orange': {
        return 3;
      }
      case 'yellow': {
        return 4;
      }
      case 'green': {
        return 5;
      }
      case 'blue': {
        return 6;
      }
      case 'violet': {
        return 7;
      }
      case 'grey': {
        return 8;
      }
      case 'white': {
        return 9;
      }
      default: {
        throw new Error('Color not valid');
      }
    }
  }

  convertColorToMultiplierValue(color: string): number {
  switch (color) {
    case 'black': {
      return 1;
    }
    case 'brown': {
      return 10;
    }
    case 'red': {
      return 100;
    }
    case 'orange': {
      return 1000;
    }
    case 'yellow': {
      return 10000;
    }
    case 'green': {
      return 100000;
    }
    case 'blue': {
      return 1000000;
    }
    case 'violet': {
      return 10000000;
    }
    case 'grey': {
      return 100000000;
    }
    case 'white': {
      return 1000000000;
    }
    case 'gold': {
      return .1;
    }
    case 'silver': {
      return .01;
    }
    default: {
      throw new Error('Color not valid');
    }
  }
 }

convertcolorToTolerance(color: string): number {
  switch (color) {
    case 'brown': {
      return 1;
    }
    case 'red': {
      return 2;
    }
    case 'green': {
      return .5;
    }
    case 'blue': {
      return .25;
    }
    case 'violet': {
      return .1;
    }
    case 'grey': {
      return .05;
    }
    case 'gold': {
      return 5;
    }
    case 'silver': {
      return .10;
    }
    case 'none': {
      return 20;
    }
    default: {
      throw new Error('Color not valid');
    }
  }
}

  ngOnInit() {
  }

}
