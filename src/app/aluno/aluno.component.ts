import { Component, OnInit } from "@angular/core";
import { AlunoModelo } from "../modelos/aluno";
import { AlunoService } from "../aluno.service";

const ELEMENT_DATA: AlunoModelo[] = [];

@Component({
  selector: "app-aluno",
  template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
      <!-- Position Column -->
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef>No.</th>
        <td mat-cell *matCellDef="let element">{{ element.id }}</td>
      </ng-container>

      <!-- nome Column -->
      <ng-container matColumnDef="nome">
        <th mat-header-cell *matHeaderCellDef>nome</th>
        <td mat-cell *matCellDef="let element">{{ element.nome }}</td>
      </ng-container>

      <!-- cpf Column -->
      <ng-container matColumnDef="cpf">
        <th mat-header-cell *matHeaderCellDef>cpf</th>
        <td mat-cell *matCellDef="let element">{{ element.cpf }}</td>
      </ng-container>

      <!-- matricula Column -->
      <ng-container matColumnDef="matricula">
        <th mat-header-cell *matHeaderCellDef>matricula</th>
        <td mat-cell *matCellDef="let element">{{ element.matricula }}</td>
      </ng-container>

      <!-- matricula Column -->
      <ng-container matColumnDef="dataNascimento">
        <th mat-header-cell *matHeaderCellDef>Data de nascimento</th>
        <td mat-cell *matCellDef="let element">{{ element.dataNascimento }}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="colunas"></tr>
      <tr mat-row *matRowDef="let row; columns: colunas"></tr>
    </table>
  `,
  styles: [``],
})

export class AlunoComponent implements OnInit {
  public alunos = Array<AlunoModelo>();

  colunas: string[] = ["id", "nome", "cpf", "matricula", "dataNascimento"];

  dataSource: Array<AlunoModelo> = ELEMENT_DATA;

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService
      .listaTodos()
      .then((entitidades: Array<AlunoModelo>) => {
        this.alunos = entitidades;
        this.dataSource = entitidades;
      })
      .catch((erro: any) => {
        console.error(erro);
      });
  }
}
