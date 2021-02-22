import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaisNoticiasPageRoutingModule } from './mais-noticias-routing.module';

import { MaisNoticiasPage } from './mais-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaisNoticiasPageRoutingModule
  ],
  declarations: [MaisNoticiasPage]
})
export class MaisNoticiasPageModule {}
