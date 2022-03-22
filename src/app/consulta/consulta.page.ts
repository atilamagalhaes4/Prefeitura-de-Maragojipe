import { PrintProvider } from './../../assets/providers/print-provider';
import { PostProvider } from './../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  alternar: boolean = true;
  token: string = "";
  verificar: boolean = false;
  pesquisa: string = "";
  alunos: any = [];

  pesquisaSerie = "";
  pesquisaEscola = "";
  pesquisaTurno = "";
  teste: boolean = false;
  qtd: number = 0;
  anoLetivo: string = ""
  diretora: string = ""
  escolaridade: string = "";
  escola: string = "";
  turno: string = "";
  serie: string = "";
  zona: string = "";

  series = [
    { nome: "Creche" }, { nome: "Pré I" }, { nome: "Pré II" }, { nome: "1º ano" }, { nome: "2º ano" }, { nome: "3º ano" }, { nome: "4º ano" }, { nome: "5º ano" },
    { nome: "EPJAI (eixo I) 1º e 2º" }, { nome: "EPJAI (eixo II) 3º e 4º" }, { nome: "6º ano" }, { nome: "7º ano" }, { nome: "8º ano" },
    { nome: "9º ano" }, { nome: "EPJAI (eixo III) 5º e 6º" }, { nome: "EPJAI (eixo IV) 7º e 8º" }
  ]

  seriesAlfa = [{ nome: "De zero 1 ano e 6 meses" }, { nome: "De 1 ano e 7 meses a 3 anos e 11 meses" }]

  escolas = []

  constructor(
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private route: Router,
    private provider: PostProvider,
    private alertController: AlertController,
    private printProvider: PrintProvider
  ) { }

  ngOnInit() {
  }

  carregarEscolas() {
    let dados = {
      requisicao: "todasEscolas"
    }
    this.provider.requisicaoPost(dados, "/educacao.php").subscribe((data) => {
      this.escolas = [];
      for (let c of data["dados"]) {
        if (c.categoria == "escola") {
          this.escolas.push(c);
        }
      }
    }, (error) => {
      console.log(error);
    })
  }

  ionViewWillEnter() {
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
    });
    this.alternar = true;
  }

  validar(verificacao) {

    this.alunos = [];
    let dados = {
      requisicao: "verificacao",
      token: verificacao
    }
    this.token = verificacao;
    this.provider.requisicaoPost(dados, "/educacao.php").subscribe((data) => {
      this.verificar = data['resultado'];
      if (this.verificar == false) {
        this.route.navigate(["/login"]);
      } else {
        if (data['dados'][0].categoria == "escola") {
          this.pesquisaEscola = data['dados'][0].login;
          this.osPrimeiros1(data['dados'][0].login);
          this.escolas = [{ nome: data['dados'][0].login }]
        } else {
          this.carregarEscolas();
          this.osPrimeiros();
        }
      }
    }, (error) => {
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }

  osPrimeiros() {

    let dados = {
      requisicao: "20Primeiros"
    }
    this.provider.requisicaoPost(dados, "/alunos.php").subscribe((data) => {
      this.alunos = [];
      this.qtd = 0
      for (let c of data['resultado']) {
        this.qtd++;
        this.alunos.push(c);
        this.diretora = "Indefinido";
        this.escolaridade = "Indefinido";
        this.escola = "Indefinido";
        this.turno = "Indefinido";
        this.serie = "Indefinido";
        this.anoLetivo = "Indefinido";
        this.zona = "Indefinido";
      }
      console.log(this.alunos.length);
    }, (error) => {
      console.log(error);
    });
  }

  osPrimeiros1(escola) {
    let dados = {
      requisicao: "20PrimeirosOPC",
      escola: escola
    }
    console.log(dados);
    this.provider.requisicaoPost(dados, "/alunos.php").subscribe((data) => {
      this.alunos = [];
      this.qtd = 0
      for (let c of data['resultado']) {
        this.qtd++;
        this.alunos.push(c);
        this.diretora = c.diretora;
        this.escolaridade = c.escolaridade;
        this.escola = c.escola;
        this.turno = c.turno;
        this.serie = c.serie;
        this.anoLetivo = c.anoLetivo;
        this.zona = c.zona;
      }
    }, (error) => {
      console.log("eita",error);
    });
  }

  inicio() {
    this.route.navigate(["/dashboard/" + this.token]);
  }
  pesquisaAvancada() {
    let data = {
      requisicao: "pesquisaAvancada",
      escola: this.pesquisaEscola,
      turno: this.pesquisaTurno,
      serie: this.pesquisaSerie
    }
    this.provider.requisicaoPost(data, "/alunos.php").subscribe((data) => {
      this.alunos = []
      this.qtd = 0
      for (let c of data['resultado']) {
        this.qtd++;
        this.alunos.push(c);
        this.diretora = c.diretora;
        this.escolaridade = c.escolaridadeDiretora;
        this.escola = c.escola;
        this.turno = c.turno;
        this.serie = c.serie;
        this.anoLetivo = c.anoLetivo;
        this.zona = c.areaEscola;
      }
    }, (error) => {
      this.alunos = []
      console.log(error)
    })
  }

  print(componentName) {
    this.printProvider.print(componentName);
  }

  async exibir(id, nome) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      header: nome,
      message: "<br>Sobre o aluno, selecione uma opção.",
      buttons: [
        {
          text: 'Visualizar',
          handler: () => {
            this.route.navigate(["/emprimir/" + id + "/" + this.token]);
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.route.navigate(["/editar/" + id + "/" + this.token]);
          }
        }
      ]
    });

    await alert.present();
  }

  pesquisaAutomatica() {

    let dados = {
      requisicao: "pesquisaAutomatica",
      entrada: this.pesquisa
    }
    this.provider.requisicaoPost(dados, "/alunos.php").subscribe((data) => {
      this.alunos = [];
      this.qtd = 0;
      for (let c of data['resultado']) {
        this.qtd++;
        this.alunos.push(c);
        this.diretora = c.diretora;
        this.escolaridade = c.escolaridadeDiretora;
        this.escola = c.escola;
        this.turno = c.turno;
        this.serie = c.serie;
        this.anoLetivo = c.anoLetivo;
        this.zona = c.areaEscola;
      }

    }, (error) => {
      this.alunos = [];
      console.log(error);
    });
  }
}
