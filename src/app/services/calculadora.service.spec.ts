import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('retorna o valor correto ao subtrair dois números', () => {
    const resultado = service.subtrair(9, 3);
    expect(resultado).toBe(6);
  });

  it('retorna o valor correto ao multiplicar dois números', () => {
    const resultado = service.multiplicar(5, 5);
    expect(resultado).toBe(25);
  });

  it('retorna o valor correto ao dividir dois números', () => {
    const resultado = service.dividir(8, 4);
    expect(resultado).toBe(2);
  });

  it('lança um erro ao tentar dividir por zero', () => {
    expect(() => service.dividir(10, 0)).toThrowError('Não é permitida a divisão por zero');
  });

});
