import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaPageRoutingModule } from './consulta-routing.module';

import { ConsultaPage } from './consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaPageRoutingModule
  ],
  declarations: [ConsultaPage]
})
export class ConsultaPageModule {}
