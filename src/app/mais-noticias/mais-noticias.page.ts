import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';

@Component({
  selector: 'app-mais-noticias',
  templateUrl: './mais-noticias.page.html',
  styleUrls: ['./mais-noticias.page.scss'],
})
export class MaisNoticiasPage implements OnInit {

  alternar: boolean = false;
  maximo: number = 10;
  noticias: any = [];
  pesquisa: String = "";
  opcao: string = "";
  noticiasDuplas = [
    {
      titulo1:  "",
      thumb1: "",
      introducao1: "",
      titulo2: "",
      thumb2: "",
      introducao2: "",
      titulo3: "",
      thumb3: "",
      introducao3: "",
    }
  ]
  constructor(
    private platform: Platform,
    private provider: PostProvider,
    private route: Router,
    private actRoute: ActivatedRoute,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }
  
  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
  ionViewWillEnter(){
    
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
      maximo: this.maximo
    }
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
  }
  maisNoticias1(){
    this.maximo+=10;
    let dados ={
      requisicao: "pegarQuantidade",
      maximo: this.maximo
    }
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        this.noticias.push(c);
      }
    },(error)=>{
    });
  }

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
  }

  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}