import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { MatSort } from "@angular/material/sort";

import { AlunoModelo } from "../modelos/aluno.modelo";
import { AlunoService } from "../aluno.service";
import { AlunoDataSource } from "./aluno.datasource";

const ELEMENT_DATA: AlunoModelo[] = [];

@Component({
  selector: "app-aluno",
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="dataSource">
        <!-- Id Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>id</th>
          <td
            mat-cell
            *matCellDef="let element"
            (click)="navegaParaDetalhe(element)"
          >
            {{ element.id }}
          </td>
        </ng-container>

        <!-- Nome Column -->
        <ng-container matColumnDef="nome">
          <th mat-header-cell *matHeaderCellDef>Nome</th>
          <td
            mat-cell
            *matCellDef="let element"
            (click)="navegaParaDetalhe(element)"
          >
            {{ element.nome }}
          </td>
        </ng-container>

        <!-- Cpf Column -->
        <ng-container matColumnDef="cpf">
          <th mat-header-cell *matHeaderCellDef>Cpf</th>
          <td
            mat-cell
            *matCellDef="let element"
            (click)="navegaParaDetalhe(element)"
          >
            {{ element.cpf }}
          </td>
        </ng-container>

        <!-- Matricula Column -->
        <ng-container matColumnDef="matricula">
          <th mat-header-cell *matHeaderCellDef>Matricula</th>
          <td
            mat-cell
            *matCellDef="let element"
            (click)="navegaParaDetalhe(element)"
          >
            {{ element.matricula }}
          </td>
        </ng-container>

        <!-- Data de Nascimento Column -->
        <ng-container matColumnDef="dataNascimento">
          <th mat-header-cell *matHeaderCellDef>Data de nascimento</th>
          <td
            mat-cell
            *matCellDef="let element"
            (click)="navegaParaDetalhe(element)"
          >
            {{ element.dataNascimento }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="alunoDataSource.colunas"></tr>
        <tr mat-row *matRowDef="let row; columns: alunoDataSource.colunas"></tr>
      </table>
      <mat-paginator
        [pageSizeOptions]="[5, 10, 20]"
        showFirstLastButtons
      ></mat-paginator>
    </div>
  `,
  styles: [``],
})
export class AlunoComponent implements OnInit {
  private sort: MatSort;

  public alunos = Array<AlunoModelo>();

  public dataSource = new MatTableDataSource<AlunoModelo>(ELEMENT_DATA);

  public alunoDataSource: AlunoDataSource | null;

  private subject: BehaviorSubject<AlunoModelo[]> = new BehaviorSubject<
    AlunoModelo[]
  >([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.alunoDataSource = new AlunoDataSource(this.subject);
    // this.carregaAlunos();
  }

  navegaParaDetalhe(entrada: AlunoModelo) {
    this.router.navigate(["detalhe/" + entrada.id]);
  }

  carregaAlunos() {
    this.alunoService
      .listaTodos()
      .then((entitidades: Array<AlunoModelo>) => {
        this.alunos = entitidades;
        this.dataSource.data = entitidades;
      })
      .catch((erro: any) => {
        console.error(erro);
      });
  }
}
