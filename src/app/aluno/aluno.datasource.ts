import { CollectionViewer, DataSource } from "@angular/cdk/collections";

import { BehaviorSubject, Observable } from "rxjs";

import { AlunoModelo } from "../modelos/aluno.modelo";
import { AlunoService } from "../aluno.service";

export class AlunoDataSource extends DataSource<any> {

  private alunoService: AlunoService

  private alunosSubject = new BehaviorSubject<AlunoModelo[]>([]);

  private carregaSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.carregaSubject.asObservable();

  public colunas: string[] = [
    "id",
    "nome",
    "cpf",
    "matricula",
    "dataNascimento",
  ];

  constructor(private subject: BehaviorSubject<AlunoModelo[]>) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<AlunoModelo[]> {
    return this.alunosSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.alunosSubject.complete();
    this.carregaSubject.complete();
  }

  carregaAlunos() {
    this.alunoService
      .listaTodos()
      .then((entitidades: Array<AlunoModelo>) => {
        entitidades.forEach(element => {
          this.alunosSubject.value.push(element);
        });
      })
      .catch((erro: any) => {
        console.error(erro);
      });
  }
}
