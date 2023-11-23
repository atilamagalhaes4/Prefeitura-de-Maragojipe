import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { PrintProvider } from 'src/assets/providers/print-provider';
import { PostProvider } from '../../assets/providers/post-provider';



@Component({
  selector: 'app-corrida-sao-bartolomeu',
  templateUrl: './corrida-sao-bartolomeu.page.html',
  styleUrls: ['./corrida-sao-bartolomeu.page.scss'],
})
export class CorridaSaoBartolomeuPage implements OnInit {

  candidato: any = [];

  nome: string = "";
  dataNascimento: string = "";
  cpf: string = "";
  sexo: string = "";
  cidade: string = "";
  equipe: string = "";
  telefone: string = "";
  categoria: string = "Ampla concorrência";
  subCategoria: string = "";
  distancia: string = "";


  pesquisa: string = "";
  alternar: boolean = true;
  desativarOpcoes: boolean = false;
  termo: boolean = false;
  cpf2: string = "";

  aux_nome: string = "";
  aux_cpf: string = "";
  aux_dataNascimento: string = "";
  aux_sexo: string = "";
  aux_categoria: string = "";
  aux_subCategoria: string = "";
  aux_distancia: string = "";
  aux_equipe: string = "";
  aux_celular: string = "";
  aux_dataInscricao: string = "";

  constructor(
    private route: Router,
    private platform: Platform,
    private provider: PostProvider,
    private alertController: AlertController,
    private printProvider: PrintProvider
  ) { }

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
    aux = aux + data[3];
    aux = aux + " ás ";
    aux = aux + data[10];
    aux = aux + data[11];
    aux = aux + data[12];
    aux = aux + data[13];
    aux = aux + data[14];
    aux = aux + data[15];
    aux = aux + data[16];
    aux = aux + data[17];
    aux = aux + data[18];
    return aux;
  }

  print(componentName) {
    this.printProvider.print(componentName);
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
    this.presentAlert(`Inscrições encerradas<br>
      Limite alçando.<br>
      Obrigado a todos participantes.`)
  }


  ajustarDataNascimento() {
    if (this.dataNascimento.length == 2) {
      this.dataNascimento = this.dataNascimento + "/";
    }
    if (this.dataNascimento.length == 5) {
      this.dataNascimento = this.dataNascimento + "/";
    }
  }

  adaptarTelefone() {
    if (this.telefone == "")
      this.telefone = "(" + this.telefone;
    else if (this.telefone.length == 3)
      this.telefone = this.telefone + ") ";
    else if (this.telefone.length == 6)
      this.telefone = this.telefone + " ";
    else if (this.telefone.length == 11)
      this.telefone = this.telefone + "-";
  }

  adaptarCategoria() {

    if (this.categoria == "PCD cadeira handbike" || this.categoria == "PCD cadeira tradicional") {
      this.desativarOpcoes = true;
      this.subCategoria = "Geral";
      this.distancia = "5,5 Km";
    }
    else {
      this.desativarOpcoes = false;
    }
  }

  ngOnInit() {
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

  meInscrever() {
    return false;
    if (this.nome.length < 10)
      this.presentAlert("Informe seu nome e sobrenome.");
    else if (this.dataNascimento.length < 9)
      this.presentAlert("Infome corretamente sua data de nascimento.");
    else if (this.sexo == "")
      this.presentAlert("Informe sua orientação sexual.");
    else if (this.cpf.length < 10)
      this.presentAlert("Informe seu CPF completo.");
    else if (this.cidade.length < 3)
      this.presentAlert("Informe o nome da sua cidade.");
    else if (this.telefone.length < 3)
      this.presentAlert("Informe o seu numero de telefone/whatsapp.");
    else if (this.categoria == "")
      this.presentAlert("Informe a sua categoria.");
    else if (this.subCategoria == "")
      this.presentAlert("Informe a sua subcategoria.");
    else if (this.distancia == "")
      this.presentAlert("Informe a distancia.");
    else if (this.termo == false)
      this.presentAlert("Concorde com os termos");
    else {
      return new Promise((resolve, reject) => {
        let dados = {
          requisicao: "salvarCandidato",
          dataNascimento: this.dataNascimento,
          nome: this.nome,
          sexo: this.sexo,
          subCategoria: this.subCategoria,
          categoria: this.categoria,
          cpf: this.cpf,
          cidade: this.cidade,
          equipe: this.equipe,
          celular: this.telefone,
          distancia: this.distancia
        }
        this.provider.requisicaoPost(dados, "/corrida-sao-bartolomeu.php").subscribe((data) => {
          this.presentAlert(data['mensagem'])
        }, (error) => {
          this.presentAlert("Tente novamente mais tarde.");
          console.log(error);
        })
      });
    }
  }

  verificarCPF() {
    //    this.print("comprovante");
    return new Promise((resolve, reject) => {
      let dados = {
        requisicao: "verCandidato",
        cpf: this.cpf2,
      }
      this.provider.requisicaoPost(dados, "/corrida-sao-bartolomeu.php").subscribe((data) => {
        if (data['status'] == 200 && this.cpf2.length == 11)
          for (let i of data['dados']) {
            this.aux_nome = i.nome;
            this.aux_cpf = i.cpf;
            this.aux_dataNascimento = i.dataNascimento;
            this.aux_sexo = i.sexo;
            this.aux_categoria = i.categoria;
            this.aux_subCategoria = i.subCategoria;
            this.aux_distancia = i.distancia;
            this.aux_equipe = i.equipe;
            this.aux_celular = i.celular;
            this.aux_dataInscricao = this.AlterarData(i.dataInscricao);
            break;
          }
        else {
          this.aux_nome = "";
          this.aux_cpf = "";
          this.aux_dataNascimento = "";
          this.aux_sexo = "";
          this.aux_categoria = "";
          this.aux_subCategoria = "";
          this.aux_distancia = "";
          this.aux_equipe = "";
          this.aux_celular = "";
          this.aux_dataInscricao = "";
        }

      }, (error) => {
        this.presentAlert("Tente novamente mais tarde.");
        console.log(error);
      })
    });
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
}
