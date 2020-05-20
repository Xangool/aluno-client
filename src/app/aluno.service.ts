import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { AlunoModelo } from './modelos/aluno';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  public listaTodos(): Promise<AlunoModelo[]> {

    let url = 'http://localhost:3000/alunos';
    return this.httpClient.get<Array<AlunoModelo>>(url, this.httpOptions)
			.toPromise()
			.then((resposta) => {
        let alunoLista: Array<AlunoModelo> = new Array<AlunoModelo>();
				if (((resposta !== null) && (resposta !== undefined))) {
					for (let aluno of resposta) {
						alunoLista.push(AlunoModelo.factory(aluno));
					}
				}
				return Promise.resolve(alunoLista);
			})
			.catch((erro: any) => {
				return Promise.reject(erro);
			});
  }

  httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

}
