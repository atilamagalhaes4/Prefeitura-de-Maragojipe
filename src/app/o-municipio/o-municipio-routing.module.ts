import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OMunicipioPage } from './o-municipio.page';

const routes: Routes = [
  {
    path: '',
    component: OMunicipioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OMunicipioPageRoutingModule {}
