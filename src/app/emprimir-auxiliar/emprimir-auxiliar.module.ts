import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprimirAuxiliarPageRoutingModule } from './emprimir-auxiliar-routing.module';

import { EmprimirAuxiliarPage } from './emprimir-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprimirAuxiliarPageRoutingModule
  ],
  declarations: [EmprimirAuxiliarPage]
})
export class EmprimirAuxiliarPageModule {}
