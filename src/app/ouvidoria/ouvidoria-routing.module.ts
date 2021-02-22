import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OuvidoriaPage } from './ouvidoria.page';

const routes: Routes = [
  {
    path: '',
    component: OuvidoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OuvidoriaPageRoutingModule {}
