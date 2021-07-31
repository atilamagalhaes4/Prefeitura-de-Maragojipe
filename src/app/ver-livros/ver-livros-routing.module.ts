import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerLivrosPage } from './ver-livros.page';

const routes: Routes = [
  {
    path: '',
    component: VerLivrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerLivrosPageRoutingModule {}
