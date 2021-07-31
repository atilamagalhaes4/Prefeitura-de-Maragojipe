import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessoresPageRoutingModule } from './professores-routing.module';

import { ProfessoresPage } from './professores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessoresPageRoutingModule
  ],
  declarations: [ProfessoresPage]
})
export class ProfessoresPageModule {}
