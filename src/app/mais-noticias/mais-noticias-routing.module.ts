import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaisNoticiasPage } from './mais-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: MaisNoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaisNoticiasPageRoutingModule {}
