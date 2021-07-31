import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcionarProfessorPage } from './adcionar-professor.page';

const routes: Routes = [
  {
    path: '',
    component: AdcionarProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcionarProfessorPageRoutingModule {}