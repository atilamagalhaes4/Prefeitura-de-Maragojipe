import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPrefeitoPageRoutingModule } from './agenda-prefeito-routing.module';

import { AgendaPrefeitoPage } from './agenda-prefeito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPrefeitoPageRoutingModule
  ],
  declarations: [AgendaPrefeitoPage]
})
export class AgendaPrefeitoPageModule {}
