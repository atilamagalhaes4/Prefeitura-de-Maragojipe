import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAuxiliarPageRoutingModule } from './editar-auxiliar-routing.module';

import { EditarAuxiliarPage } from './editar-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAuxiliarPageRoutingModule
  ],
  declarations: [EditarAuxiliarPage]
})
export class EditarAuxiliarPageModule {}
