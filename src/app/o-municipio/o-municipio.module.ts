import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OMunicipioPageRoutingModule } from './o-municipio-routing.module';

import { OMunicipioPage } from './o-municipio.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OMunicipioPageRoutingModule
  ],
  declarations: [
    OMunicipioPage
  ]
})
export class OMunicipioPageModule {}
