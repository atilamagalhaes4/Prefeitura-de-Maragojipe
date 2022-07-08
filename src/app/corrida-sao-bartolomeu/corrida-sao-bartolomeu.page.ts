import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { PrintProvider } from 'src/assets/providers/print-provider';
import { PostProvider } from '../../assets/providers/post-provider';
declare var viewDados1: any;
declare var viewDados2: any;
declare var viewDados3: any;
declare var viewDados4: any;


@Component({
  selector: 'app-corrida-sao-bartolomeu',
  templateUrl: './corrida-sao-bartolomeu.page.html',
  styleUrls: ['./corrida-sao-bartolomeu.page.scss'],
})
export class CorridaSaoBartolomeuPage implements OnInit {

  candidato: any = [];

  pesquisa: string = "";
  alternar: boolean = true;
  aceito: boolean = false;
  dataNascimento: string = "";
  nome: string = "";
  sexo: string = "";
  categoria: string = "";
  cpf: string = "";
  cidade: string = "";
  equipe: string = "";
  celular: string = "";
  distancia: string = "";
  pesquisaDadosCPF: string = "";

  constructor(
    private route: Router,
    private platform: Platform,
    private provider: PostProvider,
    private alertController: AlertController,
    private printProvider: PrintProvider
  ) { }


  enviarInscricao() {

    if (this.nome == "") {
      this.presentAlert("Informe o seu nome.");
    }
    else if (this.categoria == "") {
      this.presentAlert("Informe a categoria.");
    }
    else if (this.cpf == "" || this.cpf.length != 14) {
      this.presentAlert("CPF incompleto.");
    }
    else if (this.cidade == "") {
      this.presentAlert("Informe sua naturalidade.");
    }
    else if (this.sexo == "") {
      this.presentAlert("Informe o seu sexo.");
    }
    else if (this.equipe == "") {
      this.presentAlert("Preencha o campo equipe.");
    }
    else if (this.dataNascimento == "") {
      this.presentAlert("Informe sua data de nascimento.");
    }
    else if (this.celular == "") {
      this.presentAlert("Informe seu numero/celular.");
    }
    else if (this.distancia == "") {
      this.presentAlert("Informe a distancia do percurso.");
    }
    else if (this.aceito == false) {
      this.presentAlert("Concorde com os termos impostos para continuar.");
    }
    else {
      let dados = {
        requisicao: "salvarCandidato",
        dataNascimento: this.AlterarData(this.dataNascimento),
        nome: this.nome,
        sexo: this.sexo,
        categoria: this.categoria,
        cpf: this.cpf,
        cidade: this.cidade,
        equipe: this.equipe,
        celular: this.celular,
        distancia: this.distancia,
      }
      console.log(dados)
      this.provider.requisicaoPost(dados, "/corrida-sao-bartolomeu.php").subscribe((data) => {
        this.presentAlert(data['mensagem']);
        if (data['status'] == 201) {
          this.limpar();
        }
        return true;
      }, (err) => {
        return false;
        console.log(err);
      })
    }
  }


  AlterarData(data: string) {
    var aux = "";
    aux = aux + data[8];
    aux = aux + data[9];
    aux = aux + "/";
    aux = aux + data[5];
    aux = aux + data[6];
    aux = aux + "/";
    aux = aux + data[0];
    aux = aux + data[1];
    aux = aux + data[2];
    aux = aux + data[3];/*
    aux = aux + " ás ";
    aux = aux + data[10];
    aux = aux + data[11];
    aux = aux + data[12];
    aux = aux + data[13];
    aux = aux + data[14];
    aux = aux + data[15];
    aux = aux + data[16];
    aux = aux + data[17];
    aux = aux + data[18];*/
    return aux;
  }
  limpar() {
    this.aceito = false;
    this.dataNascimento = "";
    this.nome = "";
    this.sexo = "";
    this.categoria = "";
    this.cpf = "";
    this.cidade = "";
    this.equipe = "";
    this.celular = "";
    this.distancia = "";
  }


  print(componentName) {
    this.printProvider.print(componentName);
  }

  pesquisarCPF() {
    this.candidato = [];
    return new Promise(resolve => {
      let dados = {
        requisicao: "verCandidato",
        cpf: this.pesquisaDadosCPF
      }
      this.provider.requisicaoPost(dados, "/corrida-sao-bartolomeu.php").subscribe((data) => {
        if (data['status'] == 200) {
          for (let c of data['dados']) {
            this.candidato.push(c);
          }
        }
        else if (data['status'] == 404) {
          this.presentAlert("Nenhum candidato encontrado");
        }
      }, (err) => {
        console.log(err);
      })
    })
  }

  arrumarCPF2() {
    if (this.pesquisaDadosCPF.length == 3) this.pesquisaDadosCPF = this.pesquisaDadosCPF + ".";
    if (this.pesquisaDadosCPF.length == 7) this.pesquisaDadosCPF = this.pesquisaDadosCPF + "."
    if (this.pesquisaDadosCPF.length == 11) this.pesquisaDadosCPF = this.pesquisaDadosCPF + "-";
  }

  arrumarCPF1() {
    if (this.cpf.length == 3) this.cpf = this.cpf + ".";
    if (this.cpf.length == 7) this.cpf = this.cpf + "."
    if (this.cpf.length == 11) this.cpf = this.cpf + "-";
  }

  pegarCategoria() {
    console.log(this.categoria);
  }


  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
  }

  ir(url) {
    this.route.navigate([url]);
  }

  ionViewWillEnter() {
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    if (this.platform.is("desktop")) {
      this.alternar = true;
    }
  }


  ajustarDataNascimento() {
    if (this.dataNascimento.length == 2) {
      this.dataNascimento = this.dataNascimento + "/";
    }
    if (this.dataNascimento.length == 5) {
      this.dataNascimento = this.dataNascimento + "/";
    }
  }

  ngOnInit() {/*
    viewDados1().funcao();
    viewDados2().funcao();
    viewDados3().funcao();
    viewDados4().funcao();*/
  }
  voltarPesquisa() {
    this.candidato = [];
    this.pesquisaDadosCPF = "";
  }
  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
