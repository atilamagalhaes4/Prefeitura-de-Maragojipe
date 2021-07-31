import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefesaCivilPageRoutingModule } from './defesa-civil-routing.module';

import { DefesaCivilPage } from './defesa-civil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefesaCivilPageRoutingModule
  ],
  declarations: [DefesaCivilPage]
})
export class DefesaCivilPageModule {}
