import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprimirPorteiroPage } from './emprimir-porteiro.page';

const routes: Routes = [
  {
    path: '',
    component: EmprimirPorteiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprimirPorteiroPageRoutingModule {}
