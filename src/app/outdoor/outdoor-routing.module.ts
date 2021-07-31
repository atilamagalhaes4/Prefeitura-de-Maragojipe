import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutdoorPage } from './outdoor.page';

const routes: Routes = [
  {
    path: '',
    component: OutdoorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutdoorPageRoutingModule {}
