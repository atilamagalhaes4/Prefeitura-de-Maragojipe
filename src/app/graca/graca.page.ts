import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';
import { OutdoorPage } from '../outdoor/outdoor.page';

@Component({
  selector: 'app-graca',
  templateUrl: './graca.page.html',
  styleUrls: ['./graca.page.scss'],
})
export class GracaPage implements OnInit {

  ppa: any = [];
  alternar: boolean = true;

  constructor(
    private provider: PostProvider,
    private alertController: AlertController,
    private route: Router,
    private platform: Platform,
    private modalController: ModalController
  ) {}


  ngOnInit(){

  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Senhora Graça, informe a senha de acesso.',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Informe a senha'
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
            if(blah.name1 ==""){
              this.presentAlert("O campo senha está vazio, sr Graça");
              return false;
            }
            else if(blah.name1 != "graca2021"){
              this.presentAlert("Senha incorreta, sr Graça");
              return false;
            }
            else{
              this.ppa = [];
              let dados= {
                requisicao: "pegarDadosPPA"
              }
              this.provider.requisicaoPost(dados,"/ppa.php").subscribe(data=>{
                    this.ppa = [];
                for(let c of data['resultado']){
                  this.ppa.push(c);
                }
              },(err) =>{
                this.presentAlert("Sem conexão com o banco de dados");
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }
  ionViewWillEnter(){
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    this.presentAlertPrompt();
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
        id:id,
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
        console.log(retorno);
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }
}
