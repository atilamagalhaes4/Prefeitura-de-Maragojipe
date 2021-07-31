import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxiliaresPageRoutingModule } from './auxiliares-routing.module';

import { AuxiliaresPage } from './auxiliares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxiliaresPageRoutingModule
  ],
  declarations: [AuxiliaresPage]
})
export class AuxiliaresPageModule {}
