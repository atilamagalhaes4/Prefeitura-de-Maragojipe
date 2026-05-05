import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentosPublicosPageRoutingModule } from './documentos-publicos-routing.module';

import { DocumentosPublicosPage } from './documentos-publicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentosPublicosPageRoutingModule
  ],
  declarations: [DocumentosPublicosPage]
})
export class DocumentosPublicosPageModule {}
