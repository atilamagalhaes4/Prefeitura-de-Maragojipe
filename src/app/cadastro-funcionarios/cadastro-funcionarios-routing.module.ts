import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFuncionariosPage } from './cadastro-funcionarios.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFuncionariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroFuncionariosPageRoutingModule {}
