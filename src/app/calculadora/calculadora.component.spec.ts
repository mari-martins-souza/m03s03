import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services/calculadora.service';
import { FormsModule } from '@angular/forms';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let calculadoraService: CalculadoraService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CalculadoraComponent, FormsModule],
      providers: [CalculadoraService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    calculadoraService = TestBed.inject(CalculadoraService);
    fixture.detectChanges();
  });

  it('atualiza o resultado corretamente ao somar dois números', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.somar();
    expect(component.result).toBe(8);
  });

  it('atualiza num1 e num2 quando a entrada do input for alterada pelo usuário ', () => {
    const compiled = fixture.nativeElement;

    const inputNum1 = compiled.querySelector('input[name="num1"]');
    inputNum1.value = '5';
    inputNum1.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const inputNum2 = compiled.querySelector('input[name="num2"]');
    inputNum2.value = '10';
    inputNum2.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.num1).toBe(5);
    expect(component.num2).toBe(10);
  });
});
