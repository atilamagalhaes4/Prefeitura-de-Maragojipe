import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFuncionariosPageRoutingModule } from './cadastro-funcionarios-routing.module';

import { CadastroFuncionariosPage } from './cadastro-funcionarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroFuncionariosPageRoutingModule
  ],
  declarations: [CadastroFuncionariosPage]
})
export class CadastroFuncionariosPageModule {}
