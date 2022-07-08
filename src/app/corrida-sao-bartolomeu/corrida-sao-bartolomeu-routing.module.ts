import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorridaSaoBartolomeuPage } from './corrida-sao-bartolomeu.page';

const routes: Routes = [
  {
    path: '',
    component: CorridaSaoBartolomeuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorridaSaoBartolomeuPageRoutingModule {}
