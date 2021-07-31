import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorpoTecnicoPageRoutingModule } from './corpo-tecnico-routing.module';

import { CorpoTecnicoPage } from './corpo-tecnico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorpoTecnicoPageRoutingModule
  ],
  declarations: [CorpoTecnicoPage]
})
export class CorpoTecnicoPageModule {}
