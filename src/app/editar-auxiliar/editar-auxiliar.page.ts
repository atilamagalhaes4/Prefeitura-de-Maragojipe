import { PrintProvider } from './../../assets/providers/print-provider';
import { Platform, AlertController } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-auxiliar',
  templateUrl: './editar-auxiliar.page.html',
  styleUrls: ['./editar-auxiliar.page.scss'],
})
export class EditarAuxiliarPage implements OnInit {


  verificar: boolean = false;
  alternar: boolean = true;
  pesquisa: string = "";
  token: string = "";
  auxiliares: any = []
  alunos: any = []
  
  id: string = "";
  numeroCasa: string = ""; //
  enderecoEscola: string = "";
  endereco: string = ""; //
  cidade: string = ""; //
  admissao: string = "";
  diretorResponsavel: string = "";
  cargaHoraria: string = "";
  situacao: string = "";
  zonaEscolar: string = "";
  distritoEscolar: string = "";
  dataNascimento: string = "";
  nomeEscola: string = "";
  escolaridade: string = "";
  nome: string = "";
  turno: string = "";
  dataNascimentoAjustado: string = "";
  dataAjustada: string = "";
  observacoes: string = "";
  
  areaDisable: boolean = false;
  distritoDisable: boolean = false;

  escolas = []

  voltar(){
    this.route.navigate(["/auxiliares/"+this.token]);
  }
  editar(){
    
    let dados = {
      requisicao: "editarAuxiliar",
      id:this.id,
      numeroCasa: this.numeroCasa,
      enderecoEscola: this.enderecoEscola,
      endereco: this.endereco,
      cidade: this.cidade,
      admissao: this.dataAjustada,
      diretorResponsavel: this.diretorResponsavel,
      cargaHoraria: this.cargaHoraria,
      situacao: this.situacao,
      zonaEscolar: this.zonaEscolar,
      distritoEscolar: this.distritoEscolar,
      dataNascimento: this.dataNascimentoAjustado,
      nomeEscola: this.nomeEscola,
      escolaridade: this.escolaridade,
      nome: this.nome,
      turno: this.turno,
      observacoes: this.observacoes
    }
    
    this.provider.requisicaoPost(dados, "/auxiliar.php").subscribe((data)=>{
      console.log(data);
      if(data['situacao'] == true){
        this.presentAlert(data['mensagem']);
        this.route.navigate(["/auxiliares/"+this.token]);
      }
      else{
        this.presentAlert(data['mensagem']);
      }
    },(error)=>{
      console.log(error);
    })
  }
  ngOnInit() {
  }

  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
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
  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private platform: Platform,
    private route: Router,
    private alertController: AlertController,
    private printProvider: PrintProvider
  ) { }

  validar(verificacao, id){
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
        let dados2 = {
          requisicao: "editar1Perfil",
          id: id
        }
        this.id = id;
        this.provider.requisicaoPost(dados2,"/auxiliar.php").subscribe((data)=>{
          for(let c of data['resultado']){
            this.numeroCasa= c.numeroCasa,
            this.enderecoEscola= c.enderecoEscola,
            this.endereco= c.endereco,
            this.cidade= c.cidade,
            this.admissao= c.admissao,
            this.diretorResponsavel= c.diretorResponsavel,
            this.cargaHoraria= c.cargaHoraria,
            this.situacao= c.situacao,
            this.zonaEscolar= c.zonaEscolar,
            this.distritoEscolar= c.distritoEscolar,
            this.dataNascimento= c.dataNascimento,
            this.nomeEscola= c.nomeEscola,
            this.escolaridade= c.escolaridade,
            this.nome= c.nome,
            this.turno= c.turno
            this.observacoes = c.observacoes
          }
        },(error)=>{
          console.log(error)
        });
        if(data['dados'][0].categoria == "escola"){ // se for escola
          this.enderecoEscola = data['dados'][0].endereco;
          this.nomeEscola =  data['dados'][0].login;
          this.zonaEscolar =  data['dados'][0].area;
          this.distritoEscolar =  data['dados'][0].distrito;
          
          this.areaDisable = true;
          this.distritoDisable = true;
          this.escolas = [{ nome: data['dados'][0].login }]
        }
        else{
          this.carregarEscolas();
        }
      }
    },(error)=>{
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }


  ionViewWillEnter(){
    this.pesquisa =="";
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs, data.id);
    });    
      this.alternar = true;
  }

  
  botarBarra1() {
    if (this.dataNascimento.length == 2) {
      this.dataNascimento = this.dataNascimento + ".";
    }
    if (this.dataNascimento.length == 5) {
        this.dataNascimento = this.dataNascimento + ".";
      }
  }
  
  botarBarra2() {
    if (this.admissao.length == 2) {
      this.admissao = this.admissao + ".";
    }
    if (this.admissao.length == 5) {
        this.admissao = this.admissao + ".";
      }
  }
  
  carregarEscolas() {
    let dados = {
      requisicao: "todasEscolas"
    }
    this.provider.requisicaoPost(dados, "/educacao.php").subscribe((data) => {
      this.escolas = [];
      for (let c of data["dados"]) {
        if (c.categoria == "escola") {
          this.escolas.push(c);
        }
      }
    }, (error) => {
      console.log(error);
    })
  }
  teste(){
    var dia, mes, ano;
    ano = this.admissao.substring(0,4);
    mes = this.admissao.substring(5,7)
    dia = this.admissao.substring(8,10)
    this.dataAjustada = dia.concat("\\\\")+mes.concat("\\\\")+ano;
  }
  teste2(){
    var dia, mes, ano;
    ano = this.dataNascimento.substring(0,4);
    mes = this.dataNascimento.substring(5,7)
    dia = this.dataNascimento.substring(8,10)
    this.dataNascimentoAjustado = dia.concat("\\\\")+mes.concat("\\\\")+ano;
  }
}
