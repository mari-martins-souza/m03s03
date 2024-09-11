import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services/calculadora.service';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let calculadoraService: CalculadoraService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CalculadoraComponent],
      providers: [CalculadoraService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    calculadoraService = TestBed.inject(CalculadoraService);
  });

  it('atualiza o resultado corretamente ao somar dois números', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.somar();
    expect(component.result).toBe(8);
  });
});
