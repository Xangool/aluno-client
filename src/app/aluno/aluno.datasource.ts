import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, Observable } from "rxjs";

import { AlunoModelo } from "../modelos/aluno.modelo";

export class AlunoDataSource extends DataSource<any> {

  private alunosSubject = new BehaviorSubject<AlunoModelo[]>([]);

  private carregaSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.carregaSubject.asObservable();

  public colunas: string[] = ["id", "nome", "cpf", "matricula", "dataNascimento"];

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
}
