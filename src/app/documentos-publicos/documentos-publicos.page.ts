import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { PostProvider } from './../../assets/providers/post-provider';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos-publicos',
  templateUrl: './documentos-publicos.page.html',
  styleUrls: ['./documentos-publicos.page.scss'],
})
export class DocumentosPublicosPage implements OnInit {


  alternar: boolean = false;
  pesquisa: String = "";

  opcaoPortaria: boolean = false;
  opcaoFormulario: boolean = false;
  opcaolegislacao: boolean = false;

  meioAmbientePortaria = [];
  meioAmbienteFormularios = [];
  meioAmbientelegislacao = [];

  verLicitacoes() {
    if (this.opcaolegislacao == true) {
      this.opcaolegislacao = false;
    }
    else {
      this.opcaolegislacao = true;
    }
  }

  verPortarias() {
    if (this.opcaoPortaria == true) {
      this.opcaoPortaria = false;
    }
    else {
      this.opcaoPortaria = true;
    }
  }
  verRequisicoes() {
    if (this.opcaoFormulario == true) {
      this.opcaoFormulario = false;
    }
    else {
      this.opcaoFormulario = true;
    }
  }
  constructor(
    private platform: Platform,
    private route: Router,
    private iab: InAppBrowser,
    private provider: PostProvider
  ) { }

  ngOnInit() {
  }
  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
  }
  ionViewWillEnter() {
    if (this.platform.is("desktop")) {
      this.alternar = true;
    }
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    this.pesquisarDadosAmbiente();
  }
  pesquisarDadosAmbiente() {

    let dados = {
      requisicao: "pesquisarCoisasAmbiente",
    }

    this.provider.requisicaoPost(dados, "/meio-ambiente.php").subscribe((data) => {
      for (let c of data['resultado']) {
        if (c.categoria == "documento-publico") {
          this.meioAmbienteFormularios.push(c);
        }
      }
    }, (error) => {
    })
  }

  ir2(url) {
    this.route.navigate([url]);
  }
  ir(titulo) {
    const browser = this.iab.create(titulo, "_blank");
    browser.show();
  }
}
