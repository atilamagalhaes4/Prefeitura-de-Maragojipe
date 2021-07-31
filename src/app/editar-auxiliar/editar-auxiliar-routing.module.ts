import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAuxiliarPage } from './editar-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAuxiliarPageRoutingModule {}
