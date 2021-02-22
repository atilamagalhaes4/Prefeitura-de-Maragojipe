import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APrefeituraPage } from './a-prefeitura.page';

const routes: Routes = [
  {
    path: '',
    component: APrefeituraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APrefeituraPageRoutingModule {}
