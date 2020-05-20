import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  template: `
    <div>
      <h1>Meu titulo feliz</h1>
    </div>
  `,
  styles: [`

  `]
})
export class AlunoDetalheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Chamou detalhe")
  }

}
