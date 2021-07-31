import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarProfessorPageRoutingModule } from './editar-professor-routing.module';

import { EditarProfessorPage } from './editar-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProfessorPageRoutingModule
  ],
  declarations: [EditarProfessorPage]
})
export class EditarProfessorPageModule {}
