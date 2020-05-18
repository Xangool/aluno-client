import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { AlunoModelo } from './modelos/aluno';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  public retrieve(aluno: AlunoModelo): Promise<AlunoModelo[]> {
    let path = 'localhost:3000/alunos';

    return this.httpClient.get<Array<AlunoModelo>>(path, this.httpOptions)
			.toPromise()
			.then((response) => {
				let expenseArray: Array<AlunoModelo> = new Array<AlunoModelo>();
				if (((response !== null) && (response !== undefined))) {
					for (let expense of response) {
						expenseArray.push(AlunoModelo.factory(expense));
					}
				}
				return Promise.resolve(expenseArray);
			})
			.catch((error: any) => {
				return Promise.reject(error);
			});

  }

  httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

}
