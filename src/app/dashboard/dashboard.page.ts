import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  verificar: boolean = false;
  alternar: boolean = true;
  pesquisa: string = "";
  token: string = "";

  alunos: any = []

  senhaGeral: string = "";
  idGeral: string = "";
  escola: string = "";

  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private platform: Platform,
    private route: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.pesquisa =="";
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
    })
    if(this.senhaGeral == "abc123"){
      this.presentAlertConfirm(this.idGeral);
    }
      this.alternar = true;
  }
  apagarPesquisa(){
    this.pesquisa = "";
    this.alunos = [];
  }
  
  pesquisaRapida(){

    if(this.pesquisa ==""){
      this.alunos = [];
      return false;
    }

    this.alunos = [];
    let dados;
    if(this.escola ==""){
      dados  = {
        requisicao: "pesquisaAlunoRapido1",
        nome: this.pesquisa,
        escola: this.escola
      }
    }
    else{
      dados  = {
        requisicao: "pesquisaAlunoRapido",
        nome: this.pesquisa,
        escola: this.escola
      }
    }
    console.log(dados)
    this.provider.requisicaoPost(dados,"/alunos.php").subscribe((data)=>{
      this.alunos = [];
      for(let c of data["resultado"]){
        this.alunos.push(c);
      }
    },(error)=>{
      console.log(error)
    })
  }

  validar(verificacao){
    let dados ={
      requisicao: "verificacao",
      token: verificacao
    }
    this.token = verificacao;

    this.provider.requisicaoPost(dados,"/educacao.php").subscribe((data)=>{
      this.verificar = data['resultado'];
      if(this.verificar == false){
        this.route.navigate(["/login"]);        
      }
      else{
         var ajuda =data['dados'][0].senha;
        this.senhaGeral = data['dados'][0].senha;
        this.idGeral = data['dados'][0].id;
        this.senhaGeral = ajuda;

        if(data['dados'][0].categoria == "escola"){ // se for escola
//          this.enderecoEscola = data['dados'][0].endereco;
          this.escola =  data['dados'][0].login;
  //        this.areaEscola =  data['dados'][0].area;
    //      this.distrito =  data['dados'][0].distrito;
      //    this.enderecoEscolaDisable = true;
        //  this.escolaDisable = true;
        //  this.areaDisable = true;
          //this.distritoDisable = true;
        }
      }

    },(error)=>{
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }

  detalhesAluno(id){
    this.route.navigate(["/emprimir/"+id+"/"+this.token]);
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      header: 'A senha está como padrão.',
      message: "Gostaria de alterar ?",
      inputs: [
        {
          name: 'name1',
          type: 'password',
          placeholder: 'Nova senha'
        },
        {
          name: 'name2',
          type: 'password',
          placeholder: 'Repetir senha'
        }
      ],
      buttons: [
        {
          text: 'Deixe como está.',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (blah) => {
            if(blah.name1 == "" || blah.name2 == ""){
              this.presentAlert("Algum dos campos não foi preenchido.<br>Voltaremos mais tarde.");
            }else if( blah.name1 != blah.name2){
              this.presentAlert("Os campos não correspondem.<br>Voltaremos mais tarde.");
            }
            else{

              let dados ={
                requisicao: "alterarSenha",
                senha: blah.name1,
                id: id
              }
          
              this.provider.requisicaoPost(dados,"/educacao.php").subscribe((data)=>{
                this.presentAlert("Senha alerada com sucesso, obrigado.");
              });
            }
          }
        }
      ]
    });

    await alert.present();
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
  ir(opc){
    if(opc == "adcionar"){
      this.route.navigate(["/adcionar-aluno/"+this.token]);
    }
    else if(opc == "consultar"){
      this.route.navigate(["/consulta/"+this.token]);
    }
    else if(opc == "informacoes"){
      this.route.navigate(["/informacoes/"+this.token]);
    }
    else if(opc == "auxiliares"){
      this.route.navigate(["/auxiliares/"+this.token]);
    }
    else if(opc == "porteiros"){
      this.route.navigate(["/porteiros/"+this.token]);
    }
    else if(opc == "professores"){
      this.route.navigate(["/professores/"+this.token]);
    }
  }
}
