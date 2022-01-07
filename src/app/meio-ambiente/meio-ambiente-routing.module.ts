import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeioAmbientePage } from './meio-ambiente.page';

const routes: Routes = [
  {
    path: '',
    component: MeioAmbientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeioAmbientePageRoutingModule {}
