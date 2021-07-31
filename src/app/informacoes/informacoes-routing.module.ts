import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacoesPage } from './informacoes.page';

const routes: Routes = [
  {
    path: '',
    component: InformacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacoesPageRoutingModule {}
