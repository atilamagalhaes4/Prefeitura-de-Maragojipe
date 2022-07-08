import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'a-prefeitura', loadChildren: () => import('./a-prefeitura/a-prefeitura.module').then( m => m.APrefeituraPageModule)},
  { path: 'visualizar/:titulo', loadChildren: () => import('./visualizar/visualizar.module').then( m => m.VisualizarPageModule)},
  { path: 'o-municipio', loadChildren: () => import('./o-municipio/o-municipio.module').then( m => m.OMunicipioPageModule)},
  { path: 'mais-noticias/:opcao', loadChildren: () => import('./mais-noticias/mais-noticias.module').then( m => m.MaisNoticiasPageModule)},
  { path: 'ouvidoria', loadChildren: () => import('./ouvidoria/ouvidoria.module').then( m => m.OuvidoriaPageModule) },
  { path: 'telefones-uteis', loadChildren: () => import('./telefones-uteis/telefones-uteis.module').then( m => m.TelefonesUteisPageModule)},
  { path: 'onde-ficar', loadChildren: () => import('./onde-ficar/onde-ficar.module').then( m => m.OndeFicarPageModule)},
  { path: 'onde-comer', loadChildren: () => import('./onde-comer/onde-comer.module').then( m => m.OndeComerPageModule)},
  { path: 'defesa-civil', loadChildren: () => import('./defesa-civil/defesa-civil.module').then( m => m.DefesaCivilPageModule)},
  { path: 'educacao', loadChildren: () => import('./educacao/educacao.module').then( m => m.EducacaoPageModule)},
  { path: 'corpo-tecnico', loadChildren: () => import('./corpo-tecnico/corpo-tecnico.module').then( m => m.CorpoTecnicoPageModule)},
  { path: 'ver-livros/:opc', loadChildren: () => import('./ver-livros/ver-livros.module').then( m => m.VerLivrosPageModule)},
  { path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'dashboard/:obs', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)},
  { path: 'adcionar-aluno/:obs', loadChildren: () => import('./adcionar-aluno/adcionar-aluno.module').then( m => m.AdcionarAlunoPageModule)},
  { path: 'consulta/:obs', loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)},
  { path: 'editar/:id/:obs', loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)},
  { path: 'emprimir/:id/:obs', loadChildren: () => import('./emprimir/emprimir.module').then( m => m.EmprimirPageModule)},
  { path: 'informacoes/:obs', loadChildren: () => import('./informacoes/informacoes.module').then( m => m.InformacoesPageModule)},
  { path: 'professores/:obs', loadChildren: () => import('./professores/professores.module').then( m => m.ProfessoresPageModule)},
  { path: 'adcionar-professor/:obs', loadChildren: () => import('./adcionar-professor/adcionar-professor.module').then( m => m.AdcionarProfessorPageModule)},
  { path: 'editar-professor/:obs/:id', loadChildren: () => import('./editar-professor/editar-professor.module').then( m => m.EditarProfessorPageModule)},
  { path: 'emprimir-professor/:obs/:id', loadChildren: () => import('./emprimir-professor/emprimir-professor.module').then( m => m.EmprimirProfessorPageModule)},
  { path: 'auxiliares/:obs', loadChildren: () => import('./auxiliares/auxiliares.module').then( m => m.AuxiliaresPageModule)},
  { path: 'adcionar-auxiliar/:obs', loadChildren: () => import('./adcionar-auxiliar/adcionar-auxiliar.module').then( m => m.AdcionarAuxiliarPageModule)},
  { path: 'emprimir-auxiliar/:obs/:id', loadChildren: () => import('./emprimir-auxiliar/emprimir-auxiliar.module').then( m => m.EmprimirAuxiliarPageModule)},
  { path: 'editar-auxiliar/:obs/:id', loadChildren: () => import('./editar-auxiliar/editar-auxiliar.module').then( m => m.EditarAuxiliarPageModule)},
  { path: 'porteiros/:obs', loadChildren: () => import('./porteiros/porteiros.module').then( m => m.PorteirosPageModule)},
  { path: 'adcionar-porteiro/:obs', loadChildren: () => import('./adcionar-porteiro/adcionar-porteiro.module').then( m => m.AdcionarPorteiroPageModule)},
  { path: 'emprimir-porteiro/:obs/:id', loadChildren: () => import('./emprimir-porteiro/emprimir-porteiro.module').then( m => m.EmprimirPorteiroPageModule)},
  { path: 'editar-porteiro/:obs/:id', loadChildren: () => import('./editar-porteiro/editar-porteiro.module').then( m => m.EditarPorteiroPageModule)},
  { path: 'outdoor', loadChildren: () => import('./outdoor/outdoor.module').then( m => m.OutdoorPageModule) },
  { path: 'ppa', loadChildren: () => import('./ppa/ppa.module').then( m => m.PpaPageModule)},
  { path: 'graca', loadChildren: () => import('./graca/graca.module').then( m => m.GracaPageModule)},
  { path: 'meio-ambiente', loadChildren: () => import('./meio-ambiente/meio-ambiente.module').then( m => m.MeioAmbientePageModule)},
  { path: 'reparacao-racial-mulher', loadChildren: () => import('./reparacao-racial-mulher/reparacao-racial-mulher.module').then( m => m.ReparacaoRacialMulherPageModule)},
  { path: 'publicar-noticias', loadChildren: () => import('./publicar-noticias/publicar-noticias.module').then( m => m.PublicarNoticiasPageModule)},
  {
    path: 'corrida-sao-bartolomeu',
    loadChildren: () => import('./corrida-sao-bartolomeu/corrida-sao-bartolomeu.module').then( m => m.CorridaSaoBartolomeuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

/**
 * 
 * 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "top", useHash: false, preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
 */
export class AppRoutingModule { }
