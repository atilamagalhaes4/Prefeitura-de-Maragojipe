import { PostProvider } from './../../assets/providers/post-provider';
import { Router } from '@angular/router';
//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-publicar-noticias',
  templateUrl: './publicar-noticias.page.html',
  styleUrls: ['./publicar-noticias.page.scss'],
})
export class PublicarNoticiasPage implements OnInit {

  titulo: string = "";
  introducao: string = "";
  mensagem: string = "";
  autor: string = "";
  thumb: string = "";
  visualizacoes: string = "0";
  imagem: string = "";

  mostrar: boolean = false;
  alternar: boolean = true;
  imageError: string;

  constructor(
    private alertController: AlertController,
    private route: Router,
//    private camera: Camera,
    private platform: Platform,
    private provider: PostProvider
  ) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: 'Oi, Sintia, informe a palavra-chave que lhe informei.',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Informe aqui'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.mostrar = false;
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Enviar',
          handler: (qqq) => {
            if (qqq.name1 == "sintia@admin") {
              this.mostrar = true;
            }
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  ir(rota){
    this.route.navigate([rota]);
  }
  enviarNoticia() {
    let dados = {
      requisicao: "cadastrarNoticia",
      titulo: this.titulo,
      introducao: this.introducao,
      thumb: this.imagem,
      imagem: this.imagem,
      mensagem: this.mensagem,
      autor: this.autor,
      visualizacoes: this.visualizacoes

    }
    this.provider.requisicaoPost(dados, "/noticias.php").subscribe((data) => {
      this.presentAlert(data['mensagem']);
      if (data['situacao'] == 201){
        this.limparCampos();
        this.route.navigate(["/home"]);
      }
    }, (error) => {
      console.log(error);
    })
  }

/*
  pegarFoto() {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }
    const options: CameraOptions = {
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
    };
    this.camera.getPicture(options).then((imageData) => {
      this.imagem = 'data:image/jpeg;base64,' + imageData;
      //publicarNoticias
    });
  }
*/

  limparCampos() {
    this.titulo = "";
    this.introducao = "";
    this.mensagem = "";
    this.imagem = "";

  }

  ionViewWillEnter() {
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    if (this.platform.is("desktop")) {
      this.alternar = true;
    }
    this.presentAlertPrompt();
  }

  uploadImagem(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;
      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'O tamanho máximo permitido é ' + max_size / 1000 + 'Mb';
        this.presentAlert(this.imageError);
        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Apenas imagens são permitidas ( JPG | PNG )';
        this.presentAlert(this.imageError);
        return false;
      }
      console.log(fileInput.target.files[0].type.substr(6,8));
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];
          console.log(img_height, img_width);

          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Dimensões máximas permitidas ' +
              max_height +
              '*' +
              max_width +
              'px';
            this.presentAlert(this.imageError);
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.imagem = imgBase64Path;
            //console.log(this.imagem);
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
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

}
