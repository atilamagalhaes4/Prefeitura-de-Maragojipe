import { PostProvider } from './../../assets/providers/post-provider';
import { OutdoorPage } from './../outdoor/outdoor.page';
import { HomePage } from './../home/home.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavParams, Platform } from '@ionic/angular';

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.page.html',
  styleUrls: ['./educacao.page.scss'],
})
export class EducacaoPage implements OnInit {

  pesquisa: string = "";
  alternar: boolean = true;
  play: boolean = false;
  posicao: number =1;
  div1titulo: string = "";
  div1introducao: string = "";
  div1Mensagem: string = "";
  div1imagem: string = "";
  div1link1:string = "";
  div1link2:string = "";
  div1link3:string = "";
  frase: string  ="";
  div2titulo: string = "";
  div2introducao: string = "";
  div2Mensagem: string = "";
  div2imagem: string = "";
  div2link1:string = "";
  div2link2:string = "";
  div2link3:string = "";


  div3titulo: string = "";
  div3introducao: string = "";
  div3Mensagem: string = "";
  div3imagem: string = "";
  div3link1:string = "";
  div3link2:string = "";
  div3link3:string = "";

  roleta: any = [] // conteudo abaixo // lista de todos os conteudos
  outdoor: any = [] // O banner principal
  roleta2: any = [] // noticias que as escolas publicaram
  campanha1: string = "";
  campanha2: string = "";
  campanha3: string = "";
  campanha4: string = "";

  dadosPrincipal={
    titulo: "",
    introducao: "",
    mensagem: "",
    imagem:  "",
    link1: "",
    link2: "",
    link3: "",
  }



  constructor(
    private route: Router,
    private platform: Platform,
    private alertController: AlertController,
    private modalController: ModalController,
    private provider: PostProvider

  ) { }
  
  pegarFrase(){
    let dados = {
      requisicao: "pegarFrase",
    }
    this.provider.requisicaoPost(dados,"/frases.php").subscribe((data)=>{
      for(let c of data ["resultado"]){
        this.frase ="&nbsp;".concat(c.frase);
        break;
      }
    },(error)=>{
      console.log(error);
    })
  }
  pegarOutdoor(){
    this.outdoor = [];
    let dados = {
      requisicao: "pegarNoticias",
      tipo: "outdoor"
    }
    this.provider.requisicaoPost(dados, "/banners.php").subscribe((data)=>{
      var i = 0;
      for(let c of data["resultado"]){
        this.outdoor.push(c);
        if(i ==0){
          this.dadosPrincipal.titulo = c.titulo;
          this.dadosPrincipal.introducao = c.introducao;
          this.dadosPrincipal.mensagem = c.mensagem;
          this.dadosPrincipal.imagem = c.imagem;
          this.dadosPrincipal.link1 = c.link1;
          this.dadosPrincipal.link2 = c.link2;
          this.dadosPrincipal.link3 = c.link3;
          this.div1titulo = c.titulo;
          this.div1introducao = c.introducao;
          this.div1Mensagem = c.mensagem;
          this.div1imagem = c.imagem;
          this.div1link1 = c.link1;
          this.div1link2 = c.link2;
          this.div1link3 = c.link3;
        }
        if(i == 1){
          this.div2titulo = c.titulo;
          this.div2introducao = c.introducao;
          this.div2Mensagem = c.mensagem;
          this.div2imagem = c.imagem;
          this.div2link1 = c.link1;
          this.div2link2 = c.link2;
          this.div2link3 = c.link3;
        }
        
        if(i == 2){
          this.div3titulo = c.titulo;
          this.div3introducao = c.introducao;
          this.div3Mensagem = c.mensagem;
          this.div3imagem = c.imagem;
          this.div3link1 = c.link1;
          this.div3link2 = c.link2;
          this.div3link3 = c.link3;
        }
        if(i ==3) break;
        i++;
      }
    },(error)=>{
      console.log(error)
    })
  }
  @ViewChild('codigobarras') input_codigobarras: FocusEvent;

  upar(titulo, introducao, mensagem, imagem,link1,link2,link3, posicao){
    console.log("up")
    this.posicao = posicao;
    this.dadosPrincipal.titulo = titulo;
    this.dadosPrincipal.introducao = introducao;
    this.dadosPrincipal.mensagem = mensagem;
    this.dadosPrincipal.imagem = imagem;
    this.dadosPrincipal.link1 = link1;
    this.dadosPrincipal.link2 = link2;
    this.dadosPrincipal.link3 = link3;
    console.log("teste")
  }
  pegarGeral(){
    this.roleta = [];
    let dados = {
      requisicao: "pegarNoticias",
      tipo: "geral"
    }
    this.provider.requisicaoPost(dados, "/banners.php").subscribe((data)=>{
      for(let c of data["resultado"]){
        this.roleta.push(c);
      }
    },(error)=>{
      console.log(error)
    })
  }
  abrirPDF(){
    window.open("https://www.maragojipe.ba.gov.br/Documento_curricular_referencial.pdf");
  }
  pegarDadosEscolares(){
    this.roleta2 = [];
    let dados = {
      requisicao: "pegarNoticias",
      tipo: "escola"
    }
    this.provider.requisicaoPost(dados, "/banners.php").subscribe((data)=>{
      for(let c of data["resultado"]){
        this.roleta2.push(c);
      }
    },(error)=>{
      console.log(error)
    })
  }

  pegarBarraLateral(){
    let dados = {
      requisicao: "pegarNoticias",
      tipo: "barraLateral"
    }
    var auxiliar = []
    this.provider.requisicaoPost(dados, "/banners.php").subscribe((data)=>{
      for(let c of data["resultado"]){
        auxiliar.push(c);
      }
      for(var i = 0; i<auxiliar.length ; i++){
        if(i == 0 ){
          this.div1titulo = auxiliar[i].titulo;
          this.div1introducao = auxiliar[i].introducao;
          this.div1Mensagem = auxiliar[i].mensagem;
          this.div1imagem = auxiliar[i].imagem;
          this.div1link1 = auxiliar[i].link1;
          this.div1link2 = auxiliar[i].link2;
          this.div1link3 = auxiliar[i].link3;
        }
        if(i == 1 ){
          this.div2titulo = auxiliar[i].titulo;
          this.div2introducao = auxiliar[i].introducao;
          this.div2Mensagem = auxiliar[i].mensagem;
          this.div2imagem = auxiliar[i].imagem;
          this.div2link1 = auxiliar[i].link1;
          this.div2link2 = auxiliar[i].link2;
          this.div2link3 = auxiliar[i].link3;
        }
        if(i == 2 ){
          this.div3titulo = auxiliar[i].titulo;
          this.div3introducao = auxiliar[i].introducao;
          this.div3Mensagem = auxiliar[i].mensagem;
          this.div3imagem = auxiliar[i].imagem;
          this.div3link1 = auxiliar[i].link1;
          this.div3link2 = auxiliar[i].link2;
          this.div3link3 = auxiliar[i].link3;
        }
      }
    },(error)=>{
      console.log(error)
    })
  }

  verLivros(rota){
    this.route.navigate(['/ver-livros/'+rota]);
  }

  ngOnInit() {

  } 

  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }

  ionViewWillEnter(){
    this.pegarGeral();
    this.pegarOutdoor();
//    this.pegarBarraLateral();
    this.pegarFrase();
    this.pegarCampanha();
    this.pegarDadosEscolares();
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    console.log(this.alternar)
  }


  pegarCampanha(){
    let dados = {
      requisicao: "pegarNoticias",
      tipo: "campanha"
    }
    var auxiliar = []
    this.provider.requisicaoPost(dados, "/banners.php").subscribe((data)=>{
      for(let c of data["resultado"]){
        auxiliar.push(c);
      }
      for(var i = 0; i<auxiliar.length ; i++){
        if(i == 0 ){
          this.campanha1 = auxiliar[i].imagem;
        }
        if(i == 1 ){
          this.campanha2 = auxiliar[i].imagem;
        }
        if(i == 2 ){
          this.campanha3 = auxiliar[i].imagem;
        }
        if(i == 3 ){
          this.campanha4 = auxiliar[i].imagem;
        }
      }
    },(error)=>{
      console.log(error)
    })
  }

  slideOptsOne ={
    initialSlide: 0, // inicia do 
    slidesPerView: 1, // 1 foto por vez
    autoplay:true // comecar sozinho
   };


   slideOptsTwo ={
    initialSlide: 0, // inicia do 
    slidesPerView: 5, // 1 foto por vez
    autoplay: false // comecar sozinho
   };

  slideOptsFour ={
    initialSlide: 0, // inicia do 
    slidesPerView: 6, // 1 foto por vez
    autoplay: false // comecar sozinho
   };
   
   async presentModal(titulo, introducao, mensagem, imagem, link1, link2, link3) {
    const modal = await this.modalController.create({
      component: OutdoorPage,
      cssClass: 'my-custom-class',
      componentProps: {
        titulo: titulo,
        introducao: introducao,
        mensagem: mensagem,
        imagem: imagem,
        link1: link1,
        link2: link2,
        link3: link3
      },
      swipeToClose: true,
      presentingElement: await this.modalController.getTop() // Get the top-most ion-modal
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        var retorno = dataReturned.data;
        console.log(retorno);
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }

   async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: 'Estou esperando o conteúdo dessa opção.<br>Foi adcionada apenas para demonstração.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
