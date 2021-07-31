import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerLivrosPageRoutingModule } from './ver-livros-routing.module';

import { VerLivrosPage } from './ver-livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerLivrosPageRoutingModule
  ],
  declarations: [VerLivrosPage]
})
export class VerLivrosPageModule {}
