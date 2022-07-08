import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarNoticiasPage } from './publicar-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarNoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarNoticiasPageRoutingModule {}
