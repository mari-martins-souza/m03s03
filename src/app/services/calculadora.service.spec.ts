import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('retorna o valor correto ao subtrair dois números', () => {
    const resultado = service.subtrair(10, 5);
    expect(resultado).toBe(5);
  });

  it('retorna o valor correto ao multiplicar dois números', () => {
    const resultado = service.multiplicar(10, 5);
    expect(resultado).toBe(50);
  });


});
