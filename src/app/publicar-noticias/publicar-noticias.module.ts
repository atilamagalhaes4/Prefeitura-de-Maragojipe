import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PublicarNoticiasPageRoutingModule } from './publicar-noticias-routing.module';

import { PublicarNoticiasPage } from './publicar-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarNoticiasPageRoutingModule
  ],
  declarations: [PublicarNoticiasPage]
})
export class PublicarNoticiasPageModule {}
