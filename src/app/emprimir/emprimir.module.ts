import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprimirPageRoutingModule } from './emprimir-routing.module';

import { EmprimirPage } from './emprimir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprimirPageRoutingModule
  ],
  declarations: [EmprimirPage]
})
export class EmprimirPageModule {}
