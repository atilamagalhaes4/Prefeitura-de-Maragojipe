import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprimirPage } from './emprimir.page';

const routes: Routes = [
  {
    path: '',
    component: EmprimirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprimirPageRoutingModule {}
