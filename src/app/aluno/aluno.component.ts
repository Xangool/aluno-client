import { Component, OnInit } from "@angular/core";
import { AlunoModelo } from "../modelos/aluno";
import { AlunoService } from "../aluno.service";

@Component({
  selector: "app-aluno",
  template: `
    <ul>
      <li *ngFor="let aluno of alunos">
        {{ aluno.nome }}
      </li>
    </ul>
  `,
  styles: [``],
})
export class AlunoComponent implements OnInit {
  public alunos = Array<AlunoModelo>();

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService
      .listaTodos()
      .then((entities: Array<AlunoModelo>) => {
        this.alunos = entities;
      })
      .catch((erro: any) => {
        console.error(erro);
      });
  }
}
