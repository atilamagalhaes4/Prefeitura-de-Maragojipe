import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeioAmbientePageRoutingModule } from './meio-ambiente-routing.module';

import { MeioAmbientePage } from './meio-ambiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeioAmbientePageRoutingModule
  ],
  declarations: [MeioAmbientePage]
})
export class MeioAmbientePageModule {}
