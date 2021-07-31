import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcionarAlunoPage } from './adcionar-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: AdcionarAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcionarAlunoPageRoutingModule {}
