import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprimirProfessorPage } from './emprimir-professor.page';

const routes: Routes = [
  {
    path: '',
    component: EmprimirProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprimirProfessorPageRoutingModule {}
