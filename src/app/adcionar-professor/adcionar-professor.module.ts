import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcionarProfessorPageRoutingModule } from './adcionar-professor-routing.module';

import { AdcionarProfessorPage } from './adcionar-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcionarProfessorPageRoutingModule
  ],
  declarations: [AdcionarProfessorPage]
})
export class AdcionarProfessorPageModule {}
