import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelefonesUteisPage } from './telefones-uteis.page';

const routes: Routes = [
  {
    path: '',
    component: TelefonesUteisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelefonesUteisPageRoutingModule {}
