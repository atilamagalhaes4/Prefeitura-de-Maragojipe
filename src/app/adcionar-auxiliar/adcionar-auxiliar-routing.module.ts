import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcionarAuxiliarPage } from './adcionar-auxiliar.page';

const routes: Routes = [
  {
    path: '',
    component: AdcionarAuxiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcionarAuxiliarPageRoutingModule {}
