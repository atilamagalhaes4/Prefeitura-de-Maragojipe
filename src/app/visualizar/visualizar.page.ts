import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';
@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  alternar: boolean = true;
  id: string = "";
  titulo: string = "";
  introducao: string = "";
  imagem: string = "";
  mensagem: string = "";
  autor: string = "";
  dataPost: string = "";
  visualizacoes: string = "";
  pesquisa: String = "";

  titulo1: string = "";
  titulo2: string = "";
  titulo3: string = "";
  titulo4: string = "";
  thumb1: string = "";
  thumb2: string = "";
  thumb3: string = "";
  thumb4: string = "";

  constructor(
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private provider: PostProvider,
    private route: Router
  ) { }

  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
  
  visualizar(titulo){
    this.route.navigate(['/visualizar/'+titulo]);
  }
  ionViewWillEnter(){
    this.actRoute.params.subscribe( data => {
      this.pegarInformacoes(data.titulo);
    });
    if(this.platform.is("desktop")) this.alternar = true;
    
    if(this.platform.is("mobile")) this.alternar = false;
    this.maisNoticias()
  }
  alterarView(id, visualizacoes){
    var up = parseInt(visualizacoes)+1;
    let dados = {
      requisicao: "alterarView",
      id: id,
      visualizacoes: up
    }
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
    },(error)=>{
    })
  }
  pegarInformacoes(titulo){
    let dados = {
      requisicao: "pegarNoticia",
      titulo: titulo
    }
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        this.titulo = c.titulo;
        this.introducao = c.introducao;
        this.imagem = c.imagem;
        this.mensagem = c.mensagem;
        this.autor = c.autor;
        this.dataPost = c.dataPost;
        this.visualizacoes = c.visualizacoes;
        this.id = c.id;
        this.alterarView(c.id, c.visualizacoes)
        break;
      }
    },(error)=>{
    })
  }

  ngOnInit() {
  }
  maisNoticias(){
    var i =0;
    let dados = {
      requisicao: "pegarUltimas",
      maximo: "4"
    }
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
    
      for(let c of data['resultado']){
        if(i ==0){
          this.titulo1 = c.titulo;
          this.thumb1 = c.thumb;
        }
        if(i ==1){
          this.titulo2 = c.titulo;
          this.thumb2 = c.thumb;
        }
        if(i ==2){
          this.titulo3 = c.titulo;
          this.thumb3 = c.thumb;
        }
        if(i ==3){
          this.titulo4 = c.titulo;
          this.thumb4 = c.thumb;
        }
        i++;
      }
    },(error)=>{
    })
  }

}
