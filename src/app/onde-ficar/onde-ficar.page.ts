import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';

@Component({
  selector: 'app-onde-ficar',
  templateUrl: './onde-ficar.page.html',
  styleUrls: ['./onde-ficar.page.scss'],
})
export class OndeFicarPage implements OnInit {

  alternar: boolean =true;
  pesquisa: String = "";

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
    this.pegarLugares()

  }

  pegarLugares(){
    this.todos = [];
    let dados ={
      requisicao: "ondeFicar",
    }
    this.provider.requisicaoPost(dados, "/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        this.todos.push(c);
      }
    });
  }


  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
}
