import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaPrefeitoPage } from './agenda-prefeito.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPrefeitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaPrefeitoPageRoutingModule {}
