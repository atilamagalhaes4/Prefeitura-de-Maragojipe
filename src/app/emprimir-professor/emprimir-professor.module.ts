import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprimirProfessorPageRoutingModule } from './emprimir-professor-routing.module';

import { EmprimirProfessorPage } from './emprimir-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprimirProfessorPageRoutingModule
  ],
  declarations: [EmprimirProfessorPage]
})
export class EmprimirProfessorPageModule {}
