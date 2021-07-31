import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndeFicarPageRoutingModule } from './onde-ficar-routing.module';

import { OndeFicarPage } from './onde-ficar.page';
import { PostProvider } from '../../assets/providers/post-provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndeFicarPageRoutingModule
  ],
  declarations: [OndeFicarPage],
  providers: [
    PostProvider
  ],
})
export class OndeFicarPageModule {}
