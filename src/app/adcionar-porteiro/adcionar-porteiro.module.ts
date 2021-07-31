import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcionarPorteiroPageRoutingModule } from './adcionar-porteiro-routing.module';

import { AdcionarPorteiroPage } from './adcionar-porteiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcionarPorteiroPageRoutingModule
  ],
  declarations: [AdcionarPorteiroPage]
})
export class AdcionarPorteiroPageModule {}
