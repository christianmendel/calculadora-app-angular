import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  constructor(private calculadoraService: CalculadoraService) {}

  valor1: string = '';
  valor2: string = '';
  operacao: string = '';
  display: string = '';
  resultado: number = 0;

  ngOnInit() {
    this.limpar();
  }

  limpar(): void {
    this.valor1 = '';
    this.valor2 = '';
    this.operacao = '';
    this.display = '';
    this.resultado = 0;
  }

  adicionarNumero(numero: string): void {
    if (this.operacao === '') {
      this.valor1 = this.concatenarNumero(this.valor1, numero);
    } else {
      this.valor2 = this.concatenarNumero(this.valor2, numero);
    }

    this.valorAlterado();
  }

  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    this.operacao = operacao;

    this.valorAlterado();
  }

  calcular(): void {
    if (!this.valor1 || !this.operacao || !this.valor2) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.valor1),
      parseFloat(this.valor2),
      this.operacao
    );
  }

  valorAlterado(): void {
    this.display = `${this.valor1 ? this.valor1 : ''} ${
      this.operacao ? this.operacao : ''
    } ${this.valor2 ? this.valor2 : ''}`;
  }
}
