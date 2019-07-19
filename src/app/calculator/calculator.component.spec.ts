import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CalculatorService } from '../services/calculator.service';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let service: CalculatorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CalculatorComponent ],
      providers: [ CalculatorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(CalculatorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set member variable arrays to correct values', () => {
    expect(component.digitsColors).toEqual(['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']);
    expect(component.multiplierColors).toEqual(['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white', 'gold', 'silver']);
    expect(component.toleranceColors).toEqual(['brown', 'red', 'green', 'blue', 'violet', 'grey', 'gold', 'silver', 'none']);
  });
  
  it('should set initial empty resistance', () => {
    component.setResistance();
    expect(component.resistanceValue).toEqual(0);
  });

  it('should set intial resitance value', () => {
    component.setTolerance();
    expect(component.toleranceValue).toEqual(1);
  });
});
