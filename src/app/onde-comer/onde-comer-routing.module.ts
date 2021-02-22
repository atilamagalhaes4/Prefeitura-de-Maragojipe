import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndeComerPage } from './onde-comer.page';

const routes: Routes = [
  {
    path: '',
    component: OndeComerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OndeComerPageRoutingModule {}
