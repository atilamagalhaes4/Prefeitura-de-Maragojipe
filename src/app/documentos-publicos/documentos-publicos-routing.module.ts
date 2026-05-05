import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentosPublicosPage } from './documentos-publicos.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentosPublicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentosPublicosPageRoutingModule {}
