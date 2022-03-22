import { PostProvider } from './../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adcionar-professor',
  templateUrl: './adcionar-professor.page.html',
  styleUrls: ['./adcionar-professor.page.scss'],
})
export class AdcionarProfessorPage implements OnInit {

  alternar: boolean = true;
  verificar: boolean = true;
  token: string = "";

  escolaEnsino = "";
  diretorDele = "";
  enderecoEscolaAtua = "";
  zonaEscolaAtua = "";
  distritoEscolaAtua = "";
  nome = "";
  dataNascimento = "";
  formacao = "";
  disciplinaAtuacao: string = "";
  condicao = "";
  materia1 = "";
  turnoEscolaNormal = "";
  cargaHoraria = "";
  observacoes: string = "";
  QualEscolaHoraExtra = "";
  cargaHorariaAdcional = "";
  turnoEscolaExtra = "";
  diretorSegundaEscola = "";
  materia2 = "";
  outraEscola: string = "";
  distritoEscolaExtra = "";
  enderecoEscolaHoraExtra = "";
  zonaEscolaExtra = "";
  dataNascimentoAjustado: string = "";
  areaDisable:boolean  = false;
  distritoDisable:boolean  = false;
  pim2 ="Sim"
  talvez2 = false;
  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private provider: PostProvider,
    private alertController: AlertController
  ) { }

  escolas2 = []
  escolas = []

  ngOnInit() {
  }

  ionViewWillEnter(){
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
  
  botarBarra1() {
    if (this.dataNascimento.length == 2) {
      this.dataNascimento = this.dataNascimento + ".";
    }
    if (this.dataNascimento.length == 5) {
        this.dataNascimento = this.dataNascimento + ".";
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
      this.escolas2 = this.escolas;
    }, (error) => {
      console.log(error);
    })
  }
  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
  }
  alternarBotao2(){
    console.log("entrou")
    if(this.pim2 == "Sim"){//
      this.talvez2 = false;
    }
    else{
      this.talvez2 = true;
      this.QualEscolaHoraExtra = "";
      this.cargaHorariaAdcional = "";
      this.turnoEscolaExtra = "";
      this.outraEscola = "";
      this.diretorSegundaEscola = "";
      this.materia2 = "";
      this.distritoEscolaExtra = "";
      this.enderecoEscolaHoraExtra = "";
      this.zonaEscolaExtra = "";
    }
  }
  
  teste2(){
    var dia, mes, ano;
    ano = this.dataNascimento.substring(0,4);
    mes = this.dataNascimento.substring(5,7)
    dia = this.dataNascimento.substring(8,10)
    this.dataNascimentoAjustado == dia.concat("\\\\")+mes.concat("\\\\")+ano;
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
          this.enderecoEscolaAtua = data['dados'][0].endereco;
          this.escolaEnsino =  data['dados'][0].login;
          this.zonaEscolaAtua =  data['dados'][0].area;
          this.distritoEscolaAtua =  data['dados'][0].distrito;
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

  voltar(){
    this.route.navigate(["/professores/"+this.token]);
  }
  
  matricular(){
    let dados;
    if(this.QualEscolaHoraExtra =="Outros"){
      dados = {
        requisicao: "matricularProfessores",
        escolaEnsino: this.escolaEnsino,
        diretorDele: this.diretorDele,
        enderecoEscolaAtua: this.enderecoEscolaAtua,
        zonaEscolaAtua: this.zonaEscolaAtua,
        enderecoEscolaHoraExtra: this.enderecoEscolaHoraExtra,
        zonaEscolaExtra: this.zonaEscolaExtra,
        distritoEscolaExtra: this.distritoEscolaExtra,
        materia2: this.materia2,
        disciplinaAtuacao: this.disciplinaAtuacao,
        diretorSegundaEscola: this.diretorSegundaEscola,
        turnoEscolaExtra: this.turnoEscolaExtra,
        cargaHorariaAdcional: this.cargaHorariaAdcional,
        QualEscolaHoraExtra: this.outraEscola,
        cargaHoraria: this.cargaHoraria,
        turnoEscolaNormal: this.turnoEscolaNormal,
        materia1: this.materia1,
        condicao: this.condicao,
        formacao: this.formacao,
        dataNascimento: this.dataNascimentoAjustado,
        nome: this.nome,
        observacoes: this.observacoes,
        distritoEscolaAtua: this.distritoEscolaAtua,
      }

    }else{
      dados = {
        requisicao: "matricularProfessores",
        escolaEnsino: this.escolaEnsino,
        diretorDele: this.diretorDele,
        enderecoEscolaAtua: this.enderecoEscolaAtua,
        zonaEscolaAtua: this.zonaEscolaAtua,
        enderecoEscolaHoraExtra: this.enderecoEscolaHoraExtra,
        zonaEscolaExtra: this.zonaEscolaExtra,
        distritoEscolaExtra: this.distritoEscolaExtra,
        materia2: this.materia2,
        disciplinaAtuacao: this.disciplinaAtuacao,
        diretorSegundaEscola: this.diretorSegundaEscola,
        turnoEscolaExtra: this.turnoEscolaExtra,
        cargaHorariaAdcional: this.cargaHorariaAdcional,
        QualEscolaHoraExtra: this.QualEscolaHoraExtra,
        cargaHoraria: this.cargaHoraria,
        turnoEscolaNormal: this.turnoEscolaNormal,
        materia1: this.materia1,
        condicao: this.condicao,
        formacao: this.formacao,
        dataNascimento: this.dataNascimentoAjustado,
        nome: this.nome,
        distritoEscolaAtua: this.distritoEscolaAtua,
      }
    }
      console.log(dados);

      this.provider.requisicaoPost(dados, "/professores.php").subscribe((data)=>{
      if(data['situacao'] == true){
//        this.presentAlert(data['mensagem']);
  //      this.route.navigate(["/professores/"+this.token]);
        this.presentAlertConfirm("Dados salvos com sucesso.<br>Escolha uma opção.", +data['id'][0])
      }
      else{
        this.presentAlert(data['mensagem']);
      }
    },(error)=>{
      console.log(error);
    })
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
  
  async presentAlertConfirm(mensagem, id) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Voltar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.route.navigate(["/dashboard/"+this.token]);
          }
        },
        {
          text: 'Imprimir',
          handler: () => {
            this.route.navigate(["/emprimir-professor/"+this.token+"/"+id]);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
