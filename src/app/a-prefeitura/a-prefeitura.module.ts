import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APrefeituraPageRoutingModule } from './a-prefeitura-routing.module';

import { APrefeituraPage } from './a-prefeitura.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APrefeituraPageRoutingModule
  ],
  declarations: [
    APrefeituraPage
  ]
})
export class APrefeituraPageModule {}
