import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string = "";
  senha: string = "";
  tentativas: number = 0;
  secreto: string = "password";
  constructor(
    private provider: PostProvider,
    private alertController: AlertController,
    private route: Router
  ) { }


  sobreSenha(){
    if(this.secreto == "password"){
      this.secreto = "text";
    }
    else{
      this.secreto = "password";
    }
  }


  fazerLogin(){
    if(this.login == ""){
      this.presentAlert("Informe o login.");
      return false;
    }
    else if(this.senha == ""){
      this.presentAlert("Informe sua senha.");
      return false;
    }
    else{
      let dados ={
        requisicao: "login",
        login: this.login,
        senha: this.senha
      }
      this.provider.requisicaoPost(dados,"/educacao.php").subscribe((data)=>{
        var obs, id;
        for(let c of data['resultado']){
          obs = c.obs;
          id = c.id;
          break;
        }
        var token = this.novoToken();
      let dadosToken ={
        requisicao: "novoToken",
        obs: token,
        id: id
      }
      this.provider.requisicaoPost(dadosToken,"/educacao.php").subscribe((data)=>{
        this.route.navigate(["/dashboard/"+token]);
        
      });
      },(error)=>{
        this.tentativas ++;
        if(this.tentativas !=5){
          this.presentAlert("Login ou senha incorreta.");
        }
        if(this.tentativas == 5){
          this.presentAlert("Essa foi sua quinta tentativa, recomendo entrar em contato com a secretaria de educacao para redefinir sua senha.");
          this.tentativas =0;
        }
      })
    }
  }

  novoToken(){
    var matricula = "";
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    matricula+= Math.floor(10* Math.random());
    return matricula;
  }
  ngOnInit() {
  }

  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
