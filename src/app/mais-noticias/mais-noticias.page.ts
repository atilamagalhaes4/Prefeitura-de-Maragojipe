import { BaseNoticias } from './../interface/json/base-noticias';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, Platform, LoadingController } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';
@Component({
  selector: 'app-mais-noticias',
  templateUrl: './mais-noticias.page.html',
  styleUrls: ['./mais-noticias.page.scss'],
})
export class MaisNoticiasPage implements OnInit {

  alternar: boolean = false;
  maximo: number = 6;
  noticias: any = [];
  pesquisa: String = "";
  opcao: string = "";
  noticiasDuplas = [];
  posicaoAtual:number  =0;
  constructor(
    private platform: Platform,
    private provider: PostProvider,
    private route: Router,
    private actRoute: ActivatedRoute,
    private alertController: AlertController,
    private base: BaseNoticias,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {

  }
  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
  ionViewWillEnter(){
//    this.presentLoading();
    this.noticiasDuplas = this.base.modeloNoticias;
    this.actRoute.params.subscribe( (data) => {
      this.opcao = data.opcao;
      if(data.opcao =="todos"){
        this.pegarNoticias();
      }
      else{
        let dados ={
          requisicao: "pesquisarNoticia",
          pesquisa: data.opcao,
          maximo: this.maximo
        }
        var primo =0;
        var i = 0;
        this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
          for(let c of data['resultado']){
            primo++;
            if(primo==1  ||primo == 4 ||primo == 7 ||primo == 10 ||primo == 13 ||primo ==16 ||primo == 19||primo == 22||primo == 25||primo == 28||primo == 31||primo == 34||primo == 37){ 
              this.noticiasDuplas[i].titulo1 = c.titulo;
              this.noticiasDuplas[i].thumb1 = c.thumb;
              this.noticiasDuplas[i].introducao1 = c.introducao;
            } 
            if(primo ==2  ||primo == 5 ||primo == 8 ||primo ==  11||primo == 14||primo == 17||primo == 20||primo == 23||primo == 26||primo == 29||primo == 32||primo == 35||primo == 38){
              this.noticiasDuplas[i].titulo2 = c.titulo;
              this.noticiasDuplas[i].thumb2 = c.thumb;
              this.noticiasDuplas[i].introducao2 = c.introducao;
            }
            if(primo ==3  ||primo == 6 ||primo == 9 ||primo == 12 ||primo == 15||primo == 18||primo == 21||primo == 24||primo == 27||primo == 30||primo == 33||primo == 36||primo == 39){
              this.noticiasDuplas[i].titulo3 = c.titulo;
              this.noticiasDuplas[i].thumb3 = c.thumb;
              this.noticiasDuplas[i].introducao3 = c.introducao;
              i++;
            }
        /*
            if(primo==1){
              this.noticiasDuplas[i].titulo1 = c.titulo;
              this.noticiasDuplas[i].thumb1 = c.thumb;
              this.noticiasDuplas[i].introducao1 = c.introducao;
            }
            if(primo ==2){
              this.noticiasDuplas[i].titulo2 = c.titulo;
              this.noticiasDuplas[i].thumb2 = c.thumb;
              this.noticiasDuplas[i].introducao2 = c.introducao;
            }
            if(primo ==3){
              this.noticiasDuplas[i].titulo3 = c.titulo;
              this.noticiasDuplas[i].thumb3 = c.thumb;
              this.noticiasDuplas[i].introducao3 = c.introducao;
              primo = 0;
              i++;
            }*/
          }
        },(error)=>{
          this.noticiasDuplas = []
      });
      }
    });

    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
  }

  visualizar(titulo){
    this.route.navigate(['/visualizar/'+titulo]);
  }
  pegarNoticias(){
    var primo =0;
    var i = 0;
    let dados ={
      requisicao: "pegarQuantidade",
      maximo: this.maximo,
      minimo: 0
    }
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        primo++;
        if(primo==1  ||primo == 4 ||primo == 7 ||primo == 10 ||primo == 13 ||primo ==16 ||primo == 19||primo == 22||primo == 25||primo == 28||primo == 31||primo == 34||primo == 37){ 
          this.noticiasDuplas[i].titulo1 = c.titulo;
          this.noticiasDuplas[i].thumb1 = c.thumb;
          this.noticiasDuplas[i].introducao1 = c.introducao;
        } 
        if(primo ==2  ||primo == 5 ||primo == 8 ||primo ==  11||primo == 14||primo == 17||primo == 20||primo == 23||primo == 26||primo == 29||primo == 32||primo == 35||primo == 38){
          this.noticiasDuplas[i].titulo2 = c.titulo;
          this.noticiasDuplas[i].thumb2 = c.thumb;
          this.noticiasDuplas[i].introducao2 = c.introducao;
        }
        if(primo ==3  ||primo == 6 ||primo == 9 ||primo == 12 ||primo == 15||primo == 18||primo == 21||primo == 24||primo == 27||primo == 30||primo == 33||primo == 36||primo == 39){
          this.noticiasDuplas[i].titulo3 = c.titulo;
          this.noticiasDuplas[i].thumb3 = c.thumb;
          this.noticiasDuplas[i].introducao3 = c.introducao;
          i++;
        }
      }
      this.posicaoAtual = i;
    },(error)=>{
    });
  }
  maisNoticias1(){
    this.presentLoading();
    var minimo = this.maximo;
    this.maximo+=6;
    let dados ={
      requisicao: "pegarQuantidade",
      maximo: this.maximo,
      minimo: minimo
    }
    var primo =0;
    var i =  this.posicaoAtual;
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        primo++;
        if(primo==1  ||primo == 4 ||primo == 7 ||primo == 10 ||primo == 13 ||primo ==16 ||primo == 19||primo == 22||primo == 25||primo == 28||primo == 31||primo == 34||primo == 37){ 
          this.noticiasDuplas[i].titulo1 = c.titulo;
          this.noticiasDuplas[i].thumb1 = c.thumb;
          this.noticiasDuplas[i].introducao1 = c.introducao;
        } 
        if(primo ==2  ||primo == 5 ||primo == 8 ||primo ==  11||primo == 14||primo == 17||primo == 20||primo == 23||primo == 26||primo == 29||primo == 32||primo == 35||primo == 38){
          this.noticiasDuplas[i].titulo2 = c.titulo;
          this.noticiasDuplas[i].thumb2 = c.thumb;
          this.noticiasDuplas[i].introducao2 = c.introducao;
        }
        if(primo ==3  ||primo == 6 ||primo == 9 ||primo == 12 ||primo == 15||primo == 18||primo == 21||primo == 24||primo == 27||primo == 30||primo == 33||primo == 36||primo == 39){
          this.noticiasDuplas[i].titulo3 = c.titulo;
          this.noticiasDuplas[i].thumb3 = c.thumb;
          this.noticiasDuplas[i].introducao3 = c.introducao;
          i++;
        }
      }
      this.posicaoAtual = i;
      /*for(let c of data['resultado']){
        this.noticias.push(c);
      }*/
    },(error)=>{
      console.log(error);
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'primary',
      message: 'Espere um instante ...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
/*
  maisNoticias2(){
    
    this.maximo+=10;
    let dados ={
      requisicao: "pesquisarNoticia",
      pesquisa: this.opcao,
      maximo: this.maximo
    }
    var primo =0;
    var i = 0;    
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        primo++;
        if(primo==1){
          this.noticiasDuplas[i].titulo1 = c.titulo;
          this.noticiasDuplas[i].thumb1 = c.thumb;
          this.noticiasDuplas[i].introducao1 = c.introducao;
        } 
        if(primo ==2){
          this.noticiasDuplas[i].titulo2 = c.titulo;
          this.noticiasDuplas[i].thumb2 = c.thumb;
          this.noticiasDuplas[i].introducao2 = c.introducao;
        }
        if(primo ==3){
          this.noticiasDuplas[i].titulo3 = c.titulo;
          this.noticiasDuplas[i].thumb3 = c.thumb;
          this.noticiasDuplas[i].introducao3 = c.introducao;
          primo = 0;
          i++;
        }
      }
    },(error)=>{
  });
  }*/

  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}