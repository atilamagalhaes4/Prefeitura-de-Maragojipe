import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorridaSaoBartolomeuPageRoutingModule } from './corrida-sao-bartolomeu-routing.module';

import { CorridaSaoBartolomeuPage } from './corrida-sao-bartolomeu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorridaSaoBartolomeuPageRoutingModule
  ],
  declarations: [CorridaSaoBartolomeuPage]
})
export class CorridaSaoBartolomeuPageModule {}
