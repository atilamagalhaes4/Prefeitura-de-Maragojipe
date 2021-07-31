import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprimirPorteiroPageRoutingModule } from './emprimir-porteiro-routing.module';

import { EmprimirPorteiroPage } from './emprimir-porteiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprimirPorteiroPageRoutingModule
  ],
  declarations: [EmprimirPorteiroPage]
})
export class EmprimirPorteiroPageModule {}
