import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndeFicarPage } from './onde-ficar.page';

const routes: Routes = [
  {
    path: '',
    component: OndeFicarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndeFicarPageRoutingModule {}
