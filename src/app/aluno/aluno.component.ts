import { Component, OnInit } from "@angular/core";
import { AlunoModel } from "../models/alunos";

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
  constructor() {}

  ngOnInit(): void {}
}
