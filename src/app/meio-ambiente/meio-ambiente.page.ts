import { PostProvider } from './../../assets/providers/post-provider';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-meio-ambiente',
  templateUrl: './meio-ambiente.page.html',
  styleUrls: ['./meio-ambiente.page.scss'],
})
export class MeioAmbientePage implements OnInit {

  alternar: boolean = false;
  pesquisa: String = "";

  opcaoPortaria: boolean = false;  
  opcaoFormulario: boolean = false;

  meioAmbientePortaria = [];
  meioAmbienteFormularios = [];

  verPortarias(){
    if(this.opcaoPortaria == true){
      this.opcaoPortaria = false;
    }
    else{
      this.opcaoPortaria = true;
    }
  }
  verRequisicoes(){
    if(this.opcaoFormulario == true){
      this.opcaoFormulario = false;
    }
    else{
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
  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
  ionViewWillEnter(){
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    this.pesquisarDadosAmbiente();
  }
  pesquisarDadosAmbiente(){
    
    let dados = {
      requisicao: "pesquisarCoisasAmbiente",
    }
    this.provider.requisicaoPost(dados,"/meio-ambiente.php").subscribe((data)=>{
      console.log(data);
      for(let c of data['resultado']){
        if(c.categoria == "formulario"){
          this.meioAmbienteFormularios.push(c);
        }
        if(c.categoria =="portaria"){
          this.meioAmbientePortaria.push(c);
        }
      }
    },(error)=>{
    })
}

  ir(titulo){
    const browser = this.iab.create(titulo,"_blank");
    browser.show();
  }
}
