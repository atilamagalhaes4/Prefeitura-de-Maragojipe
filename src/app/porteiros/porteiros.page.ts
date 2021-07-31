import { Platform, AlertController } from '@ionic/angular';
import { PostProvider } from './../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porteiros',
  templateUrl: './porteiros.page.html',
  styleUrls: ['./porteiros.page.scss'],
})
export class PorteirosPage implements OnInit {

  verificar: boolean = false;
  alternar: boolean = true;
  pesquisa: string = "";
  token: string = "";
  porteiros: any = [];
  contaEscola: string = "";
  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private platform: Platform,
    private route: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.porteiros = [];
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
    });    
      this.alternar = true;
  }
  
  
  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
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
      }else{
        if(data['dados'][0].categoria == "escola"){ // se for escola
//          this.enderecoEscola = data['dados'][0].endereco;
     //     this.pesquisaEscola =  data['dados'][0].login;
  //        this.areaEscola =  data['dados'][0].area;
    //      this.distrito =  data['dados'][0].distrito;
          this.contaEscola = data['dados'][0].categoria;
          let dados2 = {
            requisicao: "pesquisarPorteiro",
            escola: data['dados'][0].login
          }
          this.provider.requisicaoPost(dados2,"/porteiro.php").subscribe((data)=>{
            this.porteiros = [];
            for(let c of data['resultado']){
              this.porteiros.push(c);
            }
          },(error)=>{
            console.log(error)
          }); 
      //    this.enderecoEscolaDisable = true;
  //        this.escolaDisable = true;
        //  this.areaDisable = true;
          //this.distritoDisable = true;
          }
      else{
        let dados2 = {
          requisicao: "pesquisarTodos"
        }
        this.provider.requisicaoPost(dados2,"/porteiro.php").subscribe((data)=>{
          this.porteiros = [];
          for(let c of data['resultado']){
            this.porteiros.push(c);
          }
        },(error)=>{
          console.log(error)
        });
      }
      }
    },(error)=>{
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }

  pesquisaAutomatica(){
    let dados = {
      requisicao: "pesquisarPorteiroNome",
      pesquisa: this.pesquisa
    }
    this.provider.requisicaoPost(dados, "/porteiro.php").subscribe((data)=>{
      this.porteiros =[]
      for(let c of data["resultado"]){
        this.porteiros.push(c);
      }
    },(error)=>{
      console.log(error);
    });
  }

  async perfilSelecionado(dados) {
    const alert = await this.alertController.create({
      message: "<b>Sr:</b> "+dados.nome+".",
      buttons: [
        {
          text: 'Visualizar',
          handler: () => {
            this.route.navigate(["/emprimir-porteiro/"+this.token+"/"+dados.id]);
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.route.navigate(["/editar-porteiro/"+this.token+"/"+dados.id]);
          }
        },
        {
          text: 'Excluir',
          cssClass: 'secondary',
          handler: (blah) => {
            let dados2 = {
              requisicao: "deletarPorteiro",
              id: dados.id
            }
            this.provider.requisicaoPost(dados2,"/porteiro.php").subscribe((data)=>{
              this.ionViewWillEnter();
            },(error)=>{
              console.log(error);
            })
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }
  adcionar(){
    this.route.navigate(["/adcionar-porteiro/"+this.token]);
  }
}
