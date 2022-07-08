import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';

@Component({
  selector: 'app-onde-comer',
  templateUrl: './onde-comer.page.html',
  styleUrls: ['./onde-comer.page.scss'],
})
export class OndeComerPage implements OnInit {


  alternar: boolean =true;
  pesquisa: String = "";

  //todos os contatos ficarao nesses array
  todos: any = []
  
  

  constructor(
    private platform: Platform,
    private route: Router,
    private provider: PostProvider
  ) { }

  ngOnInit() {
  }


  ir(url) {
    this.route.navigate([url]);
  }

  ionViewWillEnter(){
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    this.pegarLugares();
  }

  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }

  pegarLugares(){
    this.todos = [];
    let dados ={
      requisicao: "ondeComer",
    }
    this.provider.requisicaoPost(dados, "/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        this.todos.push(c);
      }
    });
  }

}
