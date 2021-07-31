import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefesaCivilPage } from './defesa-civil.page';

const routes: Routes = [
  {
    path: '',
    component: DefesaCivilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefesaCivilPageRoutingModule {}
