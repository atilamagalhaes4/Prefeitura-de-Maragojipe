import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorteirosPage } from './porteiros.page';

const routes: Routes = [
  {
    path: '',
    component: PorteirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorteirosPageRoutingModule {}
