import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';

@Component({
  selector: 'app-corpo-tecnico',
  templateUrl: './corpo-tecnico.page.html',
  styleUrls: ['./corpo-tecnico.page.scss'],
})
export class CorpoTecnicoPage implements OnInit {

  
  pesquisa: string = "";
  alternar: boolean = true;

  pessoinhas = []
  constructor(
    private route: Router,
    private platform: Platform,
    private provider: PostProvider
  ) { }

  ngOnInit() { 
  }

  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
  ionViewWillEnter(){
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    this.pegarFuncionarios();
    console.log(this.alternar)
  }

  pegarFuncionarios(){
    this.pessoinhas = [];
    let dados ={
      requisicao: "pegarNoticias",
      tipo: "profissionais"
    }
    this.provider.requisicaoPost(dados,"/banners.php").subscribe((data)=>{
      for(let c of data['resultado']){
        this.pessoinhas.push(c);
      }
    });
  }
}
