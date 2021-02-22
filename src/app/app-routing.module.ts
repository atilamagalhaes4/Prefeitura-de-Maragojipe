import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'a-prefeitura', loadChildren: () => import('./a-prefeitura/a-prefeitura.module').then( m => m.APrefeituraPageModule)},
  { path: 'visualizar/:titulo', loadChildren: () => import('./visualizar/visualizar.module').then( m => m.VisualizarPageModule)},
  { path: 'o-municipio', loadChildren: () => import('./o-municipio/o-municipio.module').then( m => m.OMunicipioPageModule)},
  { path: 'mais-noticias/:opcao', loadChildren: () => import('./mais-noticias/mais-noticias.module').then( m => m.MaisNoticiasPageModule)},
  { path: 'ouvidoria', loadChildren: () => import('./ouvidoria/ouvidoria.module').then( m => m.OuvidoriaPageModule) },
  { path: 'telefones-uteis', loadChildren: () => import('./telefones-uteis/telefones-uteis.module').then( m => m.TelefonesUteisPageModule)},
  { path: 'onde-ficar', loadChildren: () => import('./onde-ficar/onde-ficar.module').then( m => m.OndeFicarPageModule)},
  { path: 'onde-comer', loadChildren: () => import('./onde-comer/onde-comer.module').then( m => m.OndeComerPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
