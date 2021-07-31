import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcionarAlunoPageRoutingModule } from './adcionar-aluno-routing.module';

import { AdcionarAlunoPage } from './adcionar-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcionarAlunoPageRoutingModule
  ],
  declarations: [AdcionarAlunoPage]
})
export class AdcionarAlunoPageModule {}
