export class AlunoModelo {

  public id: string;

  public nome: string;

  public cpf: string;

  public matricula: string;

  public dataNascimento: any;

  constructor(nome?: string, cpf?: string, matricula?: string, dataNascimento?: any) {
    if (nome !== null && nome !== undefined) {
      this.nome = nome;
    }
    if (cpf !== null && cpf !== undefined) {
      this.cpf = cpf;
    }
    if (matricula !== null && matricula !== undefined) {
      this.matricula = matricula;
    }
    if (dataNascimento !== null && dataNascimento !== undefined) {
      this.dataNascimento = dataNascimento;
    }

  }
  public static factory(source: any): AlunoModelo {
		let target = new AlunoModelo();
		if ((source !== null) && (source !== undefined)) {
			if (source.id !== undefined) target.id = source.id;
			if (source.nome !== undefined) target.nome = source.nome;
			if (source.cpf !== undefined) target.cpf = source.cpf;
			if (source.matricula !== undefined) target.matricula = source.matricula;
			if (source.dataNascimento !== undefined) target.dataNascimento = source.dataNascimento;
		}
		return target;
	}
}
