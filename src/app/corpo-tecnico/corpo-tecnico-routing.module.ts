import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorpoTecnicoPage } from './corpo-tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: CorpoTecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorpoTecnicoPageRoutingModule {}
