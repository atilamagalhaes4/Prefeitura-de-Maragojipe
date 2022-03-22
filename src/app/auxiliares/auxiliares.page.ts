import { Platform, AlertController } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auxiliares',
  templateUrl: './auxiliares.page.html',
  styleUrls: ['./auxiliares.page.scss'],
})
export class AuxiliaresPage implements OnInit {
 

  verificar: boolean = false;
  alternar: boolean = true;
  pesquisa: string = "";
  token: string = "";
  auxiliares: any = []
  alunos: any = []
  contaEscola: string = "";
  ngOnInit() {
  }

  adcionar(){
    this.route.navigate(["/adcionar-auxiliar/"+this.token])
  }

  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
  }

  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private platform: Platform,
    private route: Router,
    private alertController: AlertController
  ) { }

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
            requisicao: "pesquisarAuxiliar",
            escola: data['dados'][0].login
          }
          this.provider.requisicaoPost(dados2,"/auxiliar.php").subscribe((data)=>{
            this.auxiliares = [];
            for(let c of data['resultado']){
              this.auxiliares.push(c);
            }
          },(error)=>{
            console.log(error)
          }); 
      //    
  //        this.escolaDisable = true;
        //  this.areaDisable = true;
          //this.distritoDisable = true;
          }
          else{
            let dados2 = {
              requisicao: "pesquisarTodospesquisarAuxiliar"
            }
            this.provider.requisicaoPost(dados2,"/auxiliar.php").subscribe((data)=>{
              this.auxiliares = [];
              for(let c of data['resultado']){
                this.auxiliares.push(c);
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
      requisicao: "pesquisarAuxiliarNome",
      pesquisa: this.pesquisa
    }
    this.provider.requisicaoPost(dados, "/auxiliar.php").subscribe((data)=>{
      this.auxiliares =[]
      for(let c of data["resultado"]){
        this.auxiliares.push(c);
      }
    },(error)=>{
      console.log(error);
    });
  }

  ionViewWillEnter(){
    this.auxiliares =[]
    this.pesquisa =="";
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
    });    
      this.alternar = true;
  }
  
  
  async perfilSelecionado(dados) {
    const alert = await this.alertController.create({
      message: "<b>Auxiliar:</b> "+dados.nome+".",
      buttons: [
        {
          text: 'Visualizar',
          handler: () => {
            this.route.navigate(["/emprimir-auxiliar/"+this.token+"/"+dados.id]);
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.route.navigate(["/editar-auxiliar/"+this.token+"/"+dados.id]);
          }
        },
        {
          text: 'Excluir',
          cssClass: 'secondary',
          handler: (blah) => {
            let dados2 = {
              requisicao: "deletarAuxiliar",
              id: dados.id
            }
            this.provider.requisicaoPost(dados2,"/professores.php").subscribe((data)=>{
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

}
