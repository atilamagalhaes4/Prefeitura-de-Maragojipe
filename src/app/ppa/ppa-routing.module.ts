import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpaPage } from './ppa.page';

const routes: Routes = [
  {
    path: '',
    component: PpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpaPageRoutingModule {}
