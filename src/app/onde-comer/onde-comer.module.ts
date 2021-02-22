import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndeComerPageRoutingModule } from './onde-comer-routing.module';

import { OndeComerPage } from './onde-comer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndeComerPageRoutingModule
  ],
  declarations: [OndeComerPage]
})
export class OndeComerPageModule {}
