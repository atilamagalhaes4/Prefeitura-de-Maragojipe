import { Router } from '@angular/router';
import { PostProvider } from './../../assets/providers/post-provider';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-ppa',
  templateUrl: './ppa.page.html',
  styleUrls: ['./ppa.page.scss'],
})
export class PpaPage implements OnInit {


  @ViewChild('barCanvas') private barCanvas: ElementRef;
  formulario: boolean = false;
  barChart: any;

  pesquisa: string = "";
  nome: string = "";
  cpf: string = "";
  distrito: string = "";
  comentario: string = "";
  email: string = "";
  alternar: boolean = true;
  public form = [
    { val: 'Saúde', isChecked: false },
    { val: 'Educação, esporte e lazer', isChecked: false },
    { val: 'Juventude/mulher/política afirmativas', isChecked: false },
    { val: 'Desenv. econômico, trabalho/geração de renda', isChecked: false },
    { val: 'Cultura e turismo', isChecked: false },
    { val: 'Serviços publicos, meio ambiente e desenv. urbano', isChecked: false },
    { val: 'Agricultura, pesca e sustentabilidade', isChecked: false },
    { val: 'Segurança pública, tributação', isChecked: false },
    { val: 'Industria, comércio, e modernização da máquina', isChecked: false }
  ];
  public checkeds = 0;
  public limit = 3;
  public podecheck = true;
  check(entry) {
    if (!entry.isChecked) {
      this.checkeds++;
      //    console.log(this.checkeds);
    } else {
      this.checkeds--;
      //      console.log(this.checkeds);
    }
  }
  constructor(
    private alertController: AlertController,
    private provider: PostProvider,
    private loadingController: LoadingController,
    private platform: Platform,
    private route: Router
  ) { }

  
  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }

  pegaPega = {
    dado1: 0,
    dado2: 0,
    dado3: 0,
    dado4: 0,
    dado5: 0,
    dado6: 0,
    dado7: 0,
    dado8: 0,
    dado9: 0,
  }
  pegarDados() { 
    this.pegaPega.dado1 =0;
    this.pegaPega.dado2 =0;
    this.pegaPega.dado3 =0;
    this.pegaPega.dado4 =0;
    this.pegaPega.dado5 =0;
    this.pegaPega.dado6 =0;
    this.pegaPega.dado7 =0;
    this.pegaPega.dado8 =0;
    this.pegaPega.dado9 =0;
    let dados = {
      requisicao: "pegarDadosPPA"
    }
    this.provider.requisicaoPost(dados, "/ppa.php").subscribe((data) => {
      
      for (let c of data['resultado']) {
        if (c.escolha1 == "Saúde") this.pegaPega.dado1 = this.pegaPega.dado1 + 1;
        else if (c.escolha1 == "Educação, esporte e lazer") this.pegaPega.dado2 = this.pegaPega.dado2 + 1;
        else if (c.escolha1 == "Juventude/mulher/política afirmativas") this.pegaPega.dado3 = this.pegaPega.dado3 + 1;
        else if (c.escolha1 == "Desenv. econômico, trabalho/geração de renda") this.pegaPega.dado4 = this.pegaPega.dado4 + 1;
        else if (c.escolha1 == "Cultura e turismo") this.pegaPega.dado5 = this.pegaPega.dado5 + 1;
        else if (c.escolha1 == "Serviços publicos, meio ambiente e desenv. urbano") this.pegaPega.dado6 = this.pegaPega.dado6 + 1;
        else if (c.escolha1 == "Agricultura, pesca e sustentabilidade") this.pegaPega.dado7 = this.pegaPega.dado7 + 1;
        else if (c.escolha1 == "Segurança pública, tributação") this.pegaPega.dado8 = this.pegaPega.dado8 + 1;
        else if (c.escolha1 == "Industria, comércio, e modernização da máquina") this.pegaPega.dado9 = this.pegaPega.dado9 + 1;

        if (c.escolha2 == "Saúde") this.pegaPega.dado1 = this.pegaPega.dado1 + 1;
        else if (c.escolha2 == "Educação, esporte e lazer") this.pegaPega.dado2 = this.pegaPega.dado2 + 1;
        else if (c.escolha2 == "Juventude/mulher/política afirmativas") this.pegaPega.dado3 = this.pegaPega.dado3 + 1;
        else if (c.escolha2 == "Desenv. econômico, trabalho/geração de renda") this.pegaPega.dado4 = this.pegaPega.dado4 + 1;
        else if (c.escolha2 == "Cultura e turismo") this.pegaPega.dado5 = this.pegaPega.dado5 + 1;
        else if (c.escolha2 == "Serviços publicos, meio ambiente e desenv. urbano") this.pegaPega.dado6 = this.pegaPega.dado6 + 1;
        else if (c.escolha2 == "Agricultura, pesca e sustentabilidade") this.pegaPega.dado7 = this.pegaPega.dado7 + 1;
        else if (c.escolha2 == "Segurança pública, tributação") this.pegaPega.dado8 = this.pegaPega.dado8 + 1;
        else if (c.escolha2 == "Industria, comércio, e modernização da máquina") this.pegaPega.dado9 = this.pegaPega.dado9 + 1;

        if (c.escolha3 == "Saúde") this.pegaPega.dado1 = this.pegaPega.dado1 + 1;
        else if (c.escolha3 == "Educação, esporte e lazer") this.pegaPega.dado2 = this.pegaPega.dado2 + 1;
        else if (c.escolha3 == "Juventude/mulher/política afirmativas") this.pegaPega.dado3 = this.pegaPega.dado3 + 1;
        else if (c.escolha3 == "Desenv. econômico, trabalho/geração de renda") this.pegaPega.dado4 = this.pegaPega.dado4 + 1;
        else if (c.escolha3 == "Cultura e turismo") this.pegaPega.dado5 = this.pegaPega.dado5 + 1;
        else if (c.escolha3 == "Serviços publicos, meio ambiente e desenv. urbano") this.pegaPega.dado6 = this.pegaPega.dado6 + 1;
        else if (c.escolha3 == "Agricultura, pesca e sustentabilidade") this.pegaPega.dado7 = this.pegaPega.dado7 + 1;
        else if (c.escolha3 == "Segurança pública, tributação") this.pegaPega.dado8 = this.pegaPega.dado8 + 1;
        else if (c.escolha3 == "Industria, comércio, e modernização da máquina") this.pegaPega.dado9 = this.pegaPega.dado9 + 1;
      }
      this.barChartMethod();
    }, (error) => {
      console.log(error)
    })
  }
/*
  ngAfterViewInit() {
    this.barChartMethod();
  }*/
  ionViewWillEnter() {
    
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
//    this.pegarDados();
  }

  barChartMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Saúde', 'Educação, esporte e lazer', 'Juventude/mulher/política afirmativas', 'Desenv. econômico, trabalho/geração de renda', 'Cultura e turismo', 'Serviços publicos, meio ambiente e desenv. urbano', 'Agricultura, pesca e sustentabilidade', 'Segurança pública, tributação', 'Industria, comércio, e modernização da máquina'],
        datasets: [{
          label: 'Quantidade de votos recebidos',
          data: [this.pegaPega.dado1, this.pegaPega.dado2, this.pegaPega.dado3, this.pegaPega.dado4, this.pegaPega.dado5, this.pegaPega.dado6, this.pegaPega.dado7, this.pegaPega.dado8, this.pegaPega.dado9],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {/**
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }] */
        }
      }
    });
  }
  async presentLoading(mensagem, duracao) {
    const loading = await this.loadingController.create({
      cssClass: 'primary',
      message: mensagem,
      duration: duracao
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  finalizarPesquisa() {

    if (this.nome.indexOf(" ") == -1 || this.nome == "") {
      this.presentAlert("Informe o nome completo");
      return false;
    }
    else if (this.distrito == "") {
      this.presentAlert("Informe o seu distrito.");
      return false;
    }
    else if (this.cpf == "" || this.cpf.length != 11) {
      this.presentAlert("Informe o seu CPF.");
      return false;
    }
    else if (this.email == "" || this.email.indexOf("@") == -1) {
      this.presentAlert("Informe um email valido.");
      return false;
    }
    var qtd = 0;
    for (var i = 0; i < 9; i++) {
      if (this.form[i].isChecked == true) {
        qtd = qtd + 1;
      }
    }
    if (qtd != 3) {
      this.presentAlert("Selecione 3 categorias.");
      return false;
    }

    else if (this.comentario == "") {
      this.presentAlert("Adcione um comentário.");
      return false;
    }
    else {
      var q1, q2, q3;
      var pos = 0;
      for (var i = 0; i < 9; i++) {
        if (this.form[i].isChecked == true) {
          if (pos == 0) {
            q1 = this.form[i].val;
          }
          else if (pos == 1) {
            q2 = this.form[i].val;
          }
          else if (pos == 2) {
            q3 = this.form[i].val;
          }
          pos = pos + 1;
        }
      }
      let dados = {
        requisicao: "adcionarComentario",
        nome: this.nome,
        distrito: this.distrito,
        cpf: this.cpf,
        email: this.email,
        comentario: this.comentario,
        escolha1: q1,
        escolha2: q2,
        escolha3: q3
      }
      this.provider.requisicaoPost(dados, "/ppa.php").subscribe((data) => {
        if (data['situacao'] == true) {
          this.nome = "";
          this.distrito = "";
          this.cpf = "";
          this.email = "";
          this.comentario = "";
          this.formulario = false;
          this.presentLoading("Salvando resposta ...", 6000);
          setTimeout(() => {
            this.pegarDados();
          }, 5000);
        }
        else{
          this.presentAlert(data['mensagem']);
        }
      }, (error) => {
        console.log(error);
        this.presentAlert("Sem conexão. Tente novamente");
      });
    }
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: "Informe seus dados",
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nome completo'
        },
        {
          name: 'name3',
          type: 'text',
          placeholder: 'Distrito'
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: 'CPF'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Confirmar',
          handler: (blah) => {
            if (blah.name1.indexOf(" ") == -1 || blah.name1 == "") {
              this.presentAlert("Informe o nome completo");
              return false
            }
            if (blah.name3 == "") {
              this.presentAlert("Informe o seu distrito.");
              return false
            }
            if (blah.name2 == "" || blah.name2.length != 11) {
              this.presentAlert("Informe o seu CPF.");
              return false
            } else {
              let dados = {
                requisicao: "validarCpf",
                cpf: blah.name2
              }
              this.provider.requisicaoPost(dados, "/ppa.php").subscribe((data) => {
                if (data['situacao'] == true) {
                  this.formulario = true;
                  this.nome = blah.name1;
                  this.distrito = blah.name3;
                  this.cpf = blah.name2;
                } else {
                  this.presentAlert(data['mensagem']);
                }
              }, (error) => {
                console.log(error);
              })
            }
          }
        }
      ]
    });

    await alert.present();
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
}
