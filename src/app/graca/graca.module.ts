import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GracaPageRoutingModule } from './graca-routing.module';

import { GracaPage } from './graca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GracaPageRoutingModule
  ],
  declarations: [GracaPage]
})
export class GracaPageModule {}
