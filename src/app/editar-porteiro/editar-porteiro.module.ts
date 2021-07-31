import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPorteiroPageRoutingModule } from './editar-porteiro-routing.module';

import { EditarPorteiroPage } from './editar-porteiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPorteiroPageRoutingModule
  ],
  declarations: [EditarPorteiroPage]
})
export class EditarPorteiroPageModule {}
