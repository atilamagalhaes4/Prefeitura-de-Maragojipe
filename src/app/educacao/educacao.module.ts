import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducacaoPageRoutingModule } from './educacao-routing.module';

import { EducacaoPage } from './educacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducacaoPageRoutingModule
  ],
  declarations: [EducacaoPage]
})
export class EducacaoPageModule {}
