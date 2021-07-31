import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';

@Component({
  selector: 'app-ouvidoria',
  templateUrl: './ouvidoria.page.html',
  styleUrls: ['./ouvidoria.page.scss'],
})
export class OuvidoriaPage implements OnInit {

  alternar: boolean = true;
  nome: string = "";
  localidade: string = "";
  email: string = "";
  assunto: string = "";
  mensagem: string = "";
  pesquisa: String = "";

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private provider: PostProvider,
    private route: Router
  ) {}

  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }
  enviarMensagem(){
    if(this.nome ==""){
      this.presentAlert("Informe o seu nome");
    }
    else if(this.localidade ==""){
      this.presentAlert("Informe o seu bairro ou distrito.");
    }
    else if(this.email ==""){
      this.presentAlert("Informe o seu email");
    }
    else if(this.assunto ==""){
      this.presentAlert("Informe o assunto da mensagem");
    }
    else if(this.mensagem ==""){
      this.presentAlert("Digite o corpo da sua mensagem")
    }
    else{/*
      let dados2 ={
        requisicao: "enviarMensagem",
        destinatario: this.email,
        assunto: "Prefeitura Municipal de Maragogipe", //deve ter recebido
        mensagem: "Ola, "+this.nome+", sua mensagem foi recebida com sucesso. Em breve, atenderemos sua solicitação."
      }
      this.provider.requisicaoPost(dados2,"/dados.php").subscribe((data)=>{
      },(error)=>{
      });
      var mensagem = "<strong>Nome</strong>:"+this.nome+"<br><strong>Localidade</strong>:"+this.localidade+"<br><strong>Email</strong>: "+this.email+"<br><strong>Assunto</strong>:"+this.assunto+"<strong>Solicicação</strong>: "+this.mensagem;
      let dados ={
        requisicao: "enviarMensagem",
        destinatario: "ascom@maragojipe.ba.gov.br",
        assunto: "email gerado pelo site.",
        mensagem: mensagem
      }
      this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
        
        this.presentAlert("Sua mensagem foi enviada com sucesso.");
        this.clear()
      },(error)=>{
        this.presentAlert("Sua mensagem foi enviada com sucesso.");
        this.clear()
      })*/
      let dados3 = {
        requisicao: "solicitacoes",
        nome: this.nome,
        assunto: this.assunto,
        mensagem: this.mensagem,
        localidade: this.localidade,
        email: this.email
      }
      this.provider.requisicaoPost(dados3,"/dados.php").subscribe((data)=>{
        this.presentAlert("Sua mensagem foi enviada com sucesso.");
        this.clear();
      },(error)=>{
      })
    }
  }
  ngOnInit() {
  }
  clear(){
    this.nome = "";
    this.localidade = "";
    this.email = "";
    this.assunto = "";
    this.mensagem = "";
  }
  ionViewWillEnter(){
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
  }

  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
}
