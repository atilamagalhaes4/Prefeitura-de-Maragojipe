import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpaPageRoutingModule } from './ppa-routing.module';

import { PpaPage } from './ppa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpaPageRoutingModule
  ],
  declarations: [PpaPage]
})
export class PpaPageModule {}
