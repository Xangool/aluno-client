import { Component, OnInit } from "@angular/core";
import { AlunoModelo } from "../modelos/aluno";
import { AlunoService } from "../aluno.service";


const ELEMENT_DATA: AlunoModelo[] = [
  {id: "1", nome: 'Hydrogen', cpf: "1.0079", matricula: "H", dataNascimento: "2020"},
  {id: "2", nome: 'Helium', cpf: "4.0026", matricula: 'He', dataNascimento: "2020"},
  {id: "3", nome: 'Lithium', cpf: "6.941", matricula: 'Li', dataNascimento: "2020"},
  {id: "4", nome: 'Beryllium', cpf: "9.0122", matricula: 'Be', dataNascimento: "2020"},
  {id: "5", nome: 'Boron', cpf: "10.811", matricula: 'B', dataNascimento: "2020"},
  {id: "6", nome: 'Carbon', cpf: "12.0107", matricula: 'C', dataNascimento: "2020"},
  {id: "7", nome: 'Nitrogen', cpf: "14.0067", matricula: 'N', dataNascimento: "2020"},
  {id: "8", nome: 'Oxygen', cpf: "15.9994", matricula: 'O', dataNascimento: "2020"},
  {id: "9", nome: 'Fluorine', cpf: "18.9984", matricula: 'F', dataNascimento: "2020"},
  {id: "10", nome: 'Neon', cpf: "20.1797", matricula: 'Ne', dataNascimento: "2020"},
];

@Component({
  selector: "app-aluno",
  template: `

<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <!-- Position Column -->
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let element"> {{element.id}} </td>
  </ng-container>

  <!-- nome Column -->
  <ng-container matColumnDef="nome">
    <th mat-header-cell *matHeaderCellDef> nome </th>
    <td mat-cell *matCellDef="let element"> {{element.nome}} </td>
  </ng-container>

  <!-- cpf Column -->
  <ng-container matColumnDef="cpf">
    <th mat-header-cell *matHeaderCellDef> cpf </th>
    <td mat-cell *matCellDef="let element"> {{element.cpf}} </td>
  </ng-container>

  <!-- matricula Column -->
  <ng-container matColumnDef="matricula">
    <th mat-header-cell *matHeaderCellDef> matricula </th>
    <td mat-cell *matCellDef="let element"> {{element.matricula}} </td>
  </ng-container>

    <!-- matricula Column -->
  <ng-container matColumnDef="matricula">
    <th mat-header-cell *matHeaderCellDef> matricula </th>
    <td mat-cell *matCellDef="let element"> {{element.matricula}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
  `,
  styles: [``],
})


export class AlunoComponent implements OnInit {
  public alunos = Array<AlunoModelo>();

  displayedColumns: string[] = ["id", "nome", "cpf", "matricula", "dataNascimento"];

  dataSource = ELEMENT_DATA;

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService
      .listaTodos()
      .then((entitidades: Array<AlunoModelo>) => {
        this.alunos = entitidades;
      })
      .catch((erro: any) => {
        console.error(erro);
      });
  }
}



