import { Component, OnInit } from "@angular/core";
import { AlunoModelo } from "../modelos/aluno";

@Component({
  selector: "app-aluno",
  template: `
    <div>
      <h1>
        Olá mundo
      </h1>
    </div>
  `,
  styles: [``],
})
export class AlunoComponent implements OnInit {

  public alunos = Array(AlunoModelo);

  constructor() {}

  ngOnInit(): void {
    // this.alunos = this.ser




  }
}
