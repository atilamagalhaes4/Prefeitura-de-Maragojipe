import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutdoorPageRoutingModule } from './outdoor-routing.module';

import { OutdoorPage } from './outdoor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutdoorPageRoutingModule
  ],
  declarations: [OutdoorPage]
})
export class OutdoorPageModule {}
