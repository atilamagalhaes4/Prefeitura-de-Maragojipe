import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  banners: any = [
    {
      imagem: "../../assets/banner/banner1.jpg"
    }
  ];
  boletim: string = "../../assets/outros/boletim.jpg";
  vacinometro: string = "../../assets/outros/vacinometro.jpg";
  campanha: string = "../../assets/outros/campanha.jpg";
  alternar: boolean = true;
  thumb1: string = "";
  thumb2: string = "";
  titulo1: string = "";
  titulo2: string = "";
  introducao1: string = "";
  introducao2: string = "";
  
  pesquisa: string = "";

  constructor(
    private platform: Platform,
    private provider: PostProvider,
    private route: Router
  ) {}

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

    this.pegarNoticias();
  }

  pegarNoticias(){
    var i =0;
    let dados = {
      requisicao: "pegarDuasNoticias"
    }
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        if(i ==0) {
          this.titulo1 = c.titulo;
          this.thumb1 = c.thumb;
          this.introducao1 = c.introducao;
        }
        else if(i == 1){
          this.titulo2 = c.titulo;
          this.thumb2 = c.thumb;
          this.introducao2 = c.introducao;
        }
        else{
          break;
        } 
        i++;
      }
    },(error)=>{
    })

  }
  
  maisNoticias(){
    this.route.navigate(["/mais-noticias/todos"]);
  }
  visualizar(titulo){
    this.route.navigate(['/visualizar/'+titulo]);
  }
  slideOptsOne ={
    initialSlide: 0, // inicia do 
    slidesPerView: 1, // 1 foto por vez
    autoplay:true // comecar sozinho
   };
}
