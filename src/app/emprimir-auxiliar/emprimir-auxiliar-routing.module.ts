import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprimirAuxiliarPage } from './emprimir-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: EmprimirAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprimirAuxiliarPageRoutingModule {}
