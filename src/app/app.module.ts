import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BaseNoticias } from './interface/json/base-noticias';
import { PrintProvider } from './../assets/providers/print-provider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { PostProvider } from '../assets/providers/post-provider';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    PostProvider,
    PrintProvider,
    BaseNoticias,
    InAppBrowser,
    NavParams
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
