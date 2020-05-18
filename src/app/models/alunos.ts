export class AlunoModel {

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
}
