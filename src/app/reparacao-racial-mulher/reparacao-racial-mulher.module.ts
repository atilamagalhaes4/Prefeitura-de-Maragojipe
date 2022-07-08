import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReparacaoRacialMulherPageRoutingModule } from './reparacao-racial-mulher-routing.module';

import { ReparacaoRacialMulherPage } from './reparacao-racial-mulher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReparacaoRacialMulherPageRoutingModule
  ],
  declarations: [ReparacaoRacialMulherPage]
})
export class ReparacaoRacialMulherPageModule {}
