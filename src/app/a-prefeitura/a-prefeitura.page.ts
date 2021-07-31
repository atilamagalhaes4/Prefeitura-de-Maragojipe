import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';

@Component({
  selector: 'app-a-prefeitura',
  templateUrl: './a-prefeitura.page.html',
  styleUrls: ['./a-prefeitura.page.scss'],
})
export class APrefeituraPage implements OnInit {

  alternar: boolean = true;
  pesquisa: String = "";
  secretarios: any = [];
  navigationSubscription: any;

  constructor(
    private platform: Platform,
    private route: Router,
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

    let dados = {
      requisicao: "osSecretarios"
    }
    this.provider.requisicaoPost(dados,"/dados.php").subscribe((data)=>{
      for(let c of data['resultado']){
        this.secretarios.push(c);
      }
    },(error)=>{
    })
  }

  
}
