import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GracaPage } from './graca.page';

const routes: Routes = [
  {
    path: '',
    component: GracaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GracaPageRoutingModule {}
