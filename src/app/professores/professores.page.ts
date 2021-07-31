import { PostProvider } from '../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {


  token: string = "";
  alternar: boolean = true;
  verificar: boolean;
  professores = [];
  pesquisa: string = "";
  contaEscola: string = "";
  constructor(
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  adcionar(){
    this.route.navigate(["/adcionar-professor/"+this.token])
  }


  ionViewWillEnter(){
    this.professores = [];
    this.pesquisa = "";
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
    });
    
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
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
            requisicao: "pesquisarProfessor",
            escola: data['dados'][0].login
          }
          this.provider.requisicaoPost(dados2,"/professores.php").subscribe((data)=>{
            this.professores = [];
            for(let c of data['resultado']){
              this.professores.push(c);
            }
          },(error)=>{
            console.log(error)
          }); 
      //    this.enderecoEscolaDisable = true;
  //        this.escolaDisable = true;
        //  this.areaDisable = true;
          //this.distritoDisable = true;
          }else{
            let dados2 = {
              requisicao: "pesquisarTodos"
            }
            this.provider.requisicaoPost(dados2,"/professores.php").subscribe((data)=>{
              this.professores = [];
              for(let c of data['resultado']){
                this.professores.push(c);
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
      requisicao: "pesquisarProfessorNome",
      pesquisa: this.pesquisa
    }
    this.provider.requisicaoPost(dados, "/professores.php").subscribe((data)=>{
      this.professores =[]
      for(let c of data["resultado"]){
        this.professores.push(c);
      }
    },(error)=>{
      console.log(error);
    });
  }
  
  async perfilSelecionado(dados) {
    const alert = await this.alertController.create({
      message: "<b>Professor(a):</b> "+dados.nome+".",
      buttons: [
        {
          text: 'Visualizar',
          handler: () => {
            this.route.navigate(["/emprimir-professor/"+this.token+"/"+dados.id]);
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.route.navigate(["/editar-professor/"+this.token+"/"+dados.id]);
          }
        },
        {
          text: 'Excluir',
          cssClass: 'secondary',
          handler: (blah) => {
            let dados2 = {
              requisicao: "deletarProfessor",
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
