import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OndeComerPageRoutingModule } from './onde-comer-routing.module';

import { OndeComerPage } from './onde-comer.page';
import { PostProvider } from '../../assets/providers/post-provider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OndeComerPageRoutingModule
  ],
  providers: [
    PostProvider 
  ],
  declarations: [
    OndeComerPage
  ]
})
export class OndeComerPageModule {}
