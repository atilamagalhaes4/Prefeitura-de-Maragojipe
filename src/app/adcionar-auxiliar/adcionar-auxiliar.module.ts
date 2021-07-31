import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcionarAuxiliarPageRoutingModule } from './adcionar-auxiliar-routing.module';

import { AdcionarAuxiliarPage } from './adcionar-auxiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcionarAuxiliarPageRoutingModule
  ],
  declarations: [AdcionarAuxiliarPage]
})
export class AdcionarAuxiliarPageModule {}
