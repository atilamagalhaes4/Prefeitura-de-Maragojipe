import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorteirosPageRoutingModule } from './porteiros-routing.module';

import { PorteirosPage } from './porteiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorteirosPageRoutingModule
  ],
  declarations: [PorteirosPage]
})
export class PorteirosPageModule {}
