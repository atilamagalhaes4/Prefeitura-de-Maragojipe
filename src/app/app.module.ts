import { BaseNoticias } from './interface/json/base-noticias';
import { PrintProvider } from './../assets/providers/print-provider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Livros } from 'src/assets/livros';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { PostProvider } from '../assets/providers/post-provider';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// eu q add
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    PostProvider,
    PrintProvider,
    BaseNoticias,
    NavParams,
    Livros
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

/**
 * import { PrintProvider } from './../assets/providers/print-provider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Livros } from 'src/assets/livros';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { PostProvider } from '../assets/providers/post-provider';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// eu q add
import { HashLocationStrategy, LocationStrategy} from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    PostProvider,
    PrintProvider,
    Livros
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

 */