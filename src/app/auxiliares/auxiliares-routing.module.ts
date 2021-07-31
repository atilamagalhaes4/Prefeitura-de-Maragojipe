import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxiliaresPage } from './auxiliares.page';

const routes: Routes = [
  {
    path: '',
    component: AuxiliaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxiliaresPageRoutingModule {}
