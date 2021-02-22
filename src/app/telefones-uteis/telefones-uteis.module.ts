import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelefonesUteisPageRoutingModule } from './telefones-uteis-routing.module';

import { TelefonesUteisPage } from './telefones-uteis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelefonesUteisPageRoutingModule
  ],
  declarations: [TelefonesUteisPage]
})
export class TelefonesUteisPageModule {}
