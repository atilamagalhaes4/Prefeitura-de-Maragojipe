import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarProfessorPage } from './editar-professor.page';

const routes: Routes = [
  {
    path: '',
    component: EditarProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarProfessorPageRoutingModule {}
