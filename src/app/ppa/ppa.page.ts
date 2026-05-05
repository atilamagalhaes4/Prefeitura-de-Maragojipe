import { Router } from '@angular/router';
import { PostProvider } from './../../assets/providers/post-provider';
import { AlertController, IonSlides, LoadingController, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from 'chart.js/auto'


@Component({
  selector: 'app-ppa',
  templateUrl: './ppa.page.html',
  styleUrls: ['./ppa.page.scss'],
})
export class PpaPage implements OnInit {

  fotos = [
    'https://maragojipe.ba.gov.br/assets/ppa/imagem%20(1).jpg',
    'https://maragojipe.ba.gov.br/assets/ppa/imagem%20(2).JPG',
    'https://maragojipe.ba.gov.br/assets/ppa/imagem%20(3).JPG',
    'https://maragojipe.ba.gov.br/assets/ppa/imagem%20(4).jpg',
    'https://maragojipe.ba.gov.br/assets/ppa/imagem%20(6).JPG',
    'https://maragojipe.ba.gov.br/assets/ppa/imagem%20(7).jpg',
    'https://maragojipe.ba.gov.br/assets/ppa/imagem%20(8).JPG',
    'https://maragojipe.ba.gov.br/assets/ppa/imagem%20(9).JPG',
  ];
  @ViewChild('slides', { static: false }) slides: IonSlides;



  slideNext() {
    this.slides.slideNext();
  }

  slidePrev() {
    this.slides.slidePrev();
  }


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


  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
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
    this.pegaPega.dado1 = 0;
    this.pegaPega.dado2 = 0;
    this.pegaPega.dado3 = 0;
    this.pegaPega.dado4 = 0;
    this.pegaPega.dado5 = 0;
    this.pegaPega.dado6 = 0;
    this.pegaPega.dado7 = 0;
    this.pegaPega.dado8 = 0;
    this.pegaPega.dado9 = 0;
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

  ngAfterViewInit() {
    this.barChartMethod();
  }
  ionViewWillEnter() {

    if (this.platform.is("desktop")) {
      this.alternar = true;
    }
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    this.pegarDados();
  }


  ir(url) {
    this.route.navigate([url]);
  }
  barChartMethod() {
    // Verifica se o gráfico já existe e o destrói
    if (this.barChart) {
      this.barChart.destroy();
      console.log("destruiu")
    }

    // Cria o gráfico novamente com uma escala fixa
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',//era bar
      data: {
        labels: [
          'Saúde',
          'Educação, esporte e lazer',
          'Juventude/mulher/política afirmativas',
          'Desenv. econômico, trabalho/geração de renda',
          'Cultura e turismo',
          'Serviços publicos, meio ambiente e desenv. urbano',
          'Agricultura, pesca e sustentabilidade',
          'Segurança pública, tributação',
          'Industria, comércio, e modernização da máquina'
        ],
        datasets: [{
          label: 'Quantidade de votos recebidos',
          data: [
            this.pegaPega.dado1,
            this.pegaPega.dado2,
            this.pegaPega.dado3,
            this.pegaPega.dado4,
            this.pegaPega.dado5,
            this.pegaPega.dado6,
            this.pegaPega.dado7,
            this.pegaPega.dado8,
            this.pegaPega.dado9
          ],
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
        responsive: true, // Permite responsividade
        maintainAspectRatio: true, // Garante a proporção definida pelo canvas
        plugins: {
          legend: {
            display: true, // Exibe a legenda
          }
        },
        scales: {
          x: {
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 45,
            }
          },
          y: {
            type: 'linear',
            beginAtZero: true,
            min: 0,
            max: 100, // Limita o valor máximo do eixo Y
            ticks: {
              stepSize: 10,
              precision: 0,
            }
          }
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
        else {
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
          placeholder: 'CPF (Opcional)'
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
  abrirImagem(url: string) {
    window.open(url, '_blank');
  }
  ngOnDestroy() {
    if (this.barChart) {
      this.barChart.destroy();
    }
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


  slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 2.1,
  spaceBetween: 16,
  autoplay: {
    delay: 3000, // tempo em milissegundos entre os slides (3 segundos aqui)
    disableOnInteraction: false // continua mesmo se o usuário interagir
  },
  loop: true // (opcional) para que volte do último para o primeiro
  };


  slideOpts2 = {
  initialSlide: 0,
  speed: 200,
  slidesPerView: 2.5,
  spaceBetween: 16,
  autoplay: {
    delay: 3000, // tempo em milissegundos entre os slides (3 segundos aqui)
    disableOnInteraction: false // continua mesmo se o usuário interagir
  },
  loop: true // (opcional) para que volte do último para o primeiro
  };

  videos = [
    { src: 'assets/videos/video1.mp4' },
    { src: 'assets/videos/video2.mp4' },
    { src: 'assets/videos/video3.mp4' }
  ];

  albums = [
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(1).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(2).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(3).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(4).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(7).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(8).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(9).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(10).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(11).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(12).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(13).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(14).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(15).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(16).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(17).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(18).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(19).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(20).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(21).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(22).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(23).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(24).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(25).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(26).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(27).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(28).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(29).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(30).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(31).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(32).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(33).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(34).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(35).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(36).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(37).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(38).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(39).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(40).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(41).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(42).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(43).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(44).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(45).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(46).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(47).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(48).JPG' },
    { cover: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1%20(49).JPG' },

  ];

  cards = [
    { title: 'Aviso 1', img: 'https://maragojipe.ba.gov.br/assets/assets-ppa/1.jpeg' },
    { title: 'Aviso 2', img: 'https://maragojipe.ba.gov.br/assets/assets-ppa/2.jpeg' },
    { title: 'Aviso 3', img: 'https://maragojipe.ba.gov.br/assets/assets-ppa/3.jpeg' },
    { title: 'Aviso 4', img: 'https://maragojipe.ba.gov.br/assets/assets-ppa/4.jpeg' },
    { title: 'Aviso 5', img: 'https://maragojipe.ba.gov.br/assets/assets-ppa/5.jpeg' },
    { title: 'Aviso 6', img: 'https://maragojipe.ba.gov.br/assets/assets-ppa/6.jpeg' },
    { title: 'Aviso 7', img: 'https://maragojipe.ba.gov.br/assets/assets-ppa/7.jpeg' },
  ];

  loadVideo(event: any) {
    const video: HTMLVideoElement = event.target;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !video.src) {
          video.src = video.dataset['src']!;
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(video);
  }

}
