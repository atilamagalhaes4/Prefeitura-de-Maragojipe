import { PrintProvider } from './../../assets/providers/print-provider';
import { PostProvider } from '../../assets/providers/post-provider';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private route: Router,
    private provider: PostProvider,
    private printProvider: PrintProvider
  ) { }

  token: string = "";
  escola: string = "";
  verificar: boolean = false;
  atila = [];
  escolas: any = [];

  dados = [
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
    {
      serie: "",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total: 0
    },
  ]

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
    });

  }
  carregarEscolas() {
    let dados = {
      requisicao: "todasEscolas"
    }
    this.provider.requisicaoPost(dados, "/educacao.php").subscribe((data) => {
      //      console.log(data);
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


  validar(verificacao) {
    let dados = {
      requisicao: "verificacao",
      token: verificacao
    }
    this.token = verificacao;

    this.provider.requisicaoPost(dados, "/educacao.php").subscribe((data) => {
      this.verificar = data['resultado'];
      if (this.verificar == false) {
        this.route.navigate(["/login"]);
      }
      else {
        if (data['dados'][0].categoria == "escola") { // se for escola
          this.escola = data['dados'][0].login;
          //          console.log(this.escola)
          this.escolas = [
            {
              nome: this.escola
            }
          ]
        }
        else {
          this.carregarEscolas();
        }
      }
    }, (error) => {
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }




  pesquisar() {
    this.atila = [];
    for (var i = 0; i < this.dados.length; i++) {
      this.dados[i].serie = "";
      this.dados[i].femininoMatutino = 0;
      this.dados[i].femininoVespertino = 0;
      this.dados[i].femininoNoturno = 0;
      this.dados[i].masculinoMatutino = 0;
      this.dados[i].masculinoVespertino = 0;
      this.dados[i].masculinoNoturno = 0;
      this.dados[i].total = 0;
    }

    let dados = {
      requisicao: "serieSexo",
      escola: this.escola
    }
    this.provider.requisicaoPost(dados, "/alunos.php").subscribe((data) => {
      console.log(data);
      for (let c of data["resultado"]) {
        this.atila.push(c);
      }
      this.pegarSalas();
      this.pegarNumeros();
    }, (error) => {
      console.log(error);
    })
  }


  pegarSalas() {
    /*Funcao para pegar o nome das 4 series da escola */
    var n = false;
    for (var i = 0; i < this.atila.length; i++) {
      for (var j = 0; j < 10; j++) {
        if (this.dados[j].serie == this.atila[i].serie) {
          n = true; // se ja tiver no vetor eu paro
          break;
        }
      }
      if (n == false) {// se n tiver eu pego o que estiver com espaco vazio
        for (var j = 0; j < 10; j++) {
          if (this.dados[j].serie == "") {
            this.dados[j].serie = this.atila[i].serie;
            break;
          }
        }
      }
      n = false;
    }
  }

  print(componentName) {
    this.printProvider.print(componentName);
  }
  voltar() {
    this.route.navigate(["/dashboard/" + this.token]);
  }

  inicio() {
    this.route.navigate(["/dashboard/" + this.token]);
  }


  pegarNumeros(){
    for (var j = 0; j < 10; j++) {
      for (var i = 0; i < this.atila.length; i++) {
        if (this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo == "Feminino" && this.atila[i].turno == "matutino") {
          this.dados[j].femininoMatutino++;
          this.dados[j].total++;
        }
        if (this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo == "Feminino" && this.atila[i].turno == "vespertino") {
          this.dados[j].femininoVespertino++;
          this.dados[j].total++;
        }
        if (this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo == "Feminino" && this.atila[i].turno == "noturno") {
          this.dados[j].femininoNoturno++;
          this.dados[j].total++;
        }
        if (this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo == "Masculino" && this.atila[i].turno == "matutino") {
          this.dados[j].masculinoMatutino++;
          this.dados[j].total++;
        }
        if (this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo == "Masculino" && this.atila[i].turno == "vespertino") {
          this.dados[j].masculinoVespertino++;
          this.dados[j].total++;
        }
        if (this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo == "Masculino" && this.atila[i].turno == "noturno") {
          this.dados[j].masculinoNoturno++;
          this.dados[j].total++;
        }
        if (this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo == "Masculino" && this.atila[i].turno == "integral") {
          this.dados[j].femininoIntegral++;
          this.dados[j].total++;
        }
        if (this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo == "Feminino" && this.atila[i].turno == "integral") {
          this.dados[j].masculinoIntegral++;
          this.dados[j].total++;
        }
      }
    }
    this.atila = [];
    for (let c of this.dados) {
      if (c.serie != "") {
        this.atila.push(c);
      }
    }
  }
}
