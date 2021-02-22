import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';

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
  ) { 
    this.navigationSubscription = this.route.events.subscribe((e: any) => {
      // Se for um evento NavigationEnd reinicialize o componente
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    // Defina os valores padrão e busque novamente todos os dados de que precisar.
  }
  ngOnDestroy() {
    // evita vazamentos de memória aqui, limpando depois de nós mesmos. Se nós
    // não faça isso, continuaremos a executar nosso initialiseInvites ()
    // método em cada evento navigationEnd.
     if (this.navigationSubscription) {  
        this.navigationSubscription.unsubscribe();
     }
   }

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
