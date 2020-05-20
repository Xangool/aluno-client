import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunoComponent } from "./aluno/aluno.component";
import { AlunoDetalheComponent } from "./aluno/aluno-detalhe.component";

const routes: Routes = [
  { path: "alunos", component: AlunoComponent },
  { path: "detalhe/:id", component: AlunoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
