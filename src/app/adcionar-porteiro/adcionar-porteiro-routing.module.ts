import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcionarPorteiroPage } from './adcionar-porteiro.page';

const routes: Routes = [
  {
    path: '',
    component: AdcionarPorteiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcionarPorteiroPageRoutingModule {}
