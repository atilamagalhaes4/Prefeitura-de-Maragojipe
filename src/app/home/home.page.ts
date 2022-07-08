import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';
declare var viewDados1: any;
declare var viewDados2: any;
declare var viewDados3: any;
declare var viewDados4: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  boletim: string = "../../assets/outros/carro.jpeg";
  vacinometro: string = "../../assets/outros/forro-do-cais.jpeg";
  corona: string = "../../assets/outros/corona.jpg"
  campanhas: string = "../../assets/outros/campanhas/001.jpeg"
  alternar: boolean = true;
  thumb1: string = "";
  thumb2: string = "";
  titulo1: string = "";
  titulo2: string = "";
  introducao1: string = "";
  introducao2: string = "";

  pesquisa: string = "";

  thumb3: string = "";
  thumb4: string = "";
  titulo3: string = "";
  titulo4: string = "";
  thumb5: string = "";
  thumb6: string = "";
  titulo5: string = "";
  titulo6: string = "";

  constructor(
    private platform: Platform,
    private provider: PostProvider,
    private route: Router
  ) { }

  ionViewWillEnter() {
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    if (this.platform.is("desktop")) {
      this.alternar = true;
    }
    this.pegarNoticias();
    this.noticiasPequenas();
  }

  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
  }

  ir(url) {
    this.route.navigate([url]);
  }

  noticiasPequenas() {
    var i = 0;
    let dados = {
      requisicao: "quatroNoticias"
    }
    this.provider.requisicaoPost(dados, "/dados.php").subscribe((data) => {
      console.log(data);
      for (let c of data['resultado']) {
        if (i == 0) {
          this.thumb3 = c.thumb;
          this.titulo3 = c.titulo;
        }
        else if (i == 1) {
          this.thumb4 = c.thumb;
          this.titulo4 = c.titulo;
        }
        else if (i == 2) {
          this.thumb5 = c.thumb;
          this.titulo5 = c.titulo;
        }
        else if (i == 3) {
          this.thumb6 = c.thumb;
          this.titulo6 = c.titulo;
        }
        i++;
      }
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    viewDados1().funcao();
    viewDados2().funcao();
    viewDados3().funcao();
    viewDados4().funcao();
  }

  pegarNoticias() {
    var i = 0;
    let dados = {
      requisicao: "pegarDuasNoticias"
    }
    this.provider.requisicaoPost(dados, "/dados.php").subscribe((data) => {
      console.log(data)
      for (let c of data['resultado']) {
        if (i == 0) {
          this.titulo1 = c.titulo;
          this.thumb1 = c.thumb;
          this.introducao1 = c.introducao;
        }
        else if (i == 1) {
          this.titulo2 = c.titulo;
          this.thumb2 = c.thumb;
          this.introducao2 = c.introducao;
        }
        else {
          break;
        }
        i++;
      }
    }, (error) => {
      console.log(error)
    })

  }

  maisNoticias() {
    this.route.navigate(["/mais-noticias/todos"]);
  }
  visualizar(titulo) {
    this.route.navigate(['/visualizar/' + titulo]);
  }
  slideOptsOne = {
    initialSlide: 0, // inicia do 
    slidesPerView: 1, // 1 foto por vez
    autoplay: true // comecar sozinho
  };
}
