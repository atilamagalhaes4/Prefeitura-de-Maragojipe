import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OuvidoriaPageRoutingModule } from './ouvidoria-routing.module';

import { OuvidoriaPage } from './ouvidoria.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OuvidoriaPageRoutingModule
  ],
  declarations: [
    OuvidoriaPage
  ]
})
export class OuvidoriaPageModule {}
