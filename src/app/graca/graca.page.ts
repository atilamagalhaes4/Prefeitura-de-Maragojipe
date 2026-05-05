import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';
import { OutdoorPage } from '../outdoor/outdoor.page';

@Component({
  selector: 'app-graca',
  templateUrl: './graca.page.html',
  styleUrls: ['./graca.page.scss'],
})
export class GracaPage implements OnInit {

  ppa: any = [];
  naoPPA: any = [];
  alternar: boolean = true;
  pesquisa: string = "";

  constructor(
    private provider: PostProvider,
    private alertController: AlertController,
    private route: Router,
    private platform: Platform,
    private modalController: ModalController,
    private loadingCtrl: LoadingController
  ) { }


  ngOnInit() {

  }

  noticias() {
    this.ppa = [];
    this.naoPPA = [];
    let dados = {
      requisicao: "pegarDadosPPA"
    }
    this.provider.requisicaoPost(dados, "/ppa.php").subscribe(data => {
      this.ppa = [];
      this.naoPPA = [];
      for (let c of data['resultado']) {
        if (c.lido == "true") {
          this.ppa.push(c);
        }
        else {
          this.naoPPA.push(c);
        }
      }

      //      console.log(this.naoPPA, this.ppa)
    }, (err) => {
      this.presentAlert("Sem conexão com o banco de dados");
    });
  }


  ir(url) {
    this.route.navigate([url]);
  }


  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
  }

  ionViewWillEnter() {
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    else if (this.platform.is("desktop")) {
      this.alternar = true;
    }
    this.noticias();
    console.log(this.alternar)
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

  async presentModal(id, nome, cpf, distrito, email, lido, comentario, escolha1, escolha2, escolha3) {
    const modal = await this.modalController.create({
      component: OutdoorPage,
      cssClass: 'my-custom-class',
      componentProps: {
        id: id,
        nome: nome,
        cpf: cpf,
        distrito: distrito,
        email: email,
        lido: lido,
        comentario: comentario,
        escolha1: escolha1,
        escolha2: escolha2,
        escolha3: escolha3,
      },
      swipeToClose: true,
      presentingElement: await this.modalController.getTop() // Get the top-most ion-modal
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        var retorno = dataReturned.data;
        this.ionViewWillEnter();
        this.showLoading();
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Por favor aguarde 3 segundos...',
      duration: 3000,
    });

    loading.present();
  }
}
