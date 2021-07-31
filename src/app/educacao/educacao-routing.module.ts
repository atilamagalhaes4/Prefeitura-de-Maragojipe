import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducacaoPage } from './educacao.page';

const routes: Routes = [
  {
    path: '',
    component: EducacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducacaoPageRoutingModule {}
