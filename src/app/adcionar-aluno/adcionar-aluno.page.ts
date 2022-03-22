import { PrintProvider } from './../../assets/providers/print-provider';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { PostProvider } from './../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adcionar-aluno',
  templateUrl: './adcionar-aluno.page.html',
  styleUrls: ['./adcionar-aluno.page.scss'],
})
export class AdcionarAlunoPage implements OnInit {

  verificar: boolean = false;
  alternar: boolean = true;
  pesquisa: string = "";
  token: string = "";
  pim = "Sim";
  pim2 = "Sim";
  talvez2: boolean = false;
  talvez: boolean = true;
////////////////////////////////////
  idSenso: string = "";
  escola: string = "";
  enderecoEscola: string = "";
  distrito: string = "";
  diretora: string = "";
  escolaridadeDiretora: string = "";
  nomeAluno: string = "";
  serie: string = "";
  documento: string = "";
//  dataNascimento: string = "";
  idade: string = "";
  naturalidade: string = "";
  sexo: string = "";
  observacoes: string ="";
  anoLetivo: string = "";
  tipoDocumento: string = "";
  nomeResponsavel1: string = "";
  nomeResponsavel2: string = "";
  nomeResponsavel3: string = "";
  turno: string = "";
  cartaoSUS: string = ""; 
  numeroCamisa: string = ""; 
  telefoneResponsavel1: string = "";
  telefoneResponsavel2: string = "";
  telefoneResponsavel3: string = "";
  profissaoResponsavel1: string = "";
  profissaoResponsavel2: string = "";
  enderecoAluno: string = "";
  dataMatricula: string = "";
  deficiencia: string = "";
  areaAluno: string = "";
  areaEscola: string = "";
  escolaAntiga: string = "";
  raca: string = "";
  religiao: string = "";
  alergia: string = "";
  contatoEmergenciaNome: string = "";
  contatoEmergenciaTelefone: string = "";
  nomeResponsavelPegador: string = "";
  dataAjustadaNascimento: string = "";
  orientacaoSexual: string = "";
  numeroMatricula: string = "";
//


areaDisable: boolean = false;
distritoDisable: boolean = false;

  series = [
    {nome: "Creche"},{nome: "Pré I"},{nome: "Pré II"}, {nome: "1º ano"},{nome: "2º ano"}, {nome: "3º ano"}, {nome: "4º ano"}, {nome: "5º ano"},
    {nome: "EPJAI (eixo I) 1º e 2º"}, {nome: "EPJAI (eixo II) 3º e 4º"}, {nome: "6º ano"}, {nome: "7º ano"}, {nome: "8º ano"},
    {nome: "9º ano"}, {nome: "EPJAI (eixo III) 5º e 6º"}, {nome: "EPJAI (eixo IV) 7º e 8º"}
  ]

  
  escolas = []

  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private platform: Platform,
    private route: Router,
    private alertController: AlertController,
    private printProvider: PrintProvider,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
      this.presentLoading("Gerando matrícula ...");
      this.validarMatricula(this.gerarMatricula());
      this.presentLoading("Carregando informações ...");
    });
      this.alternar = true;
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
  print(componentName) {
    this.printProvider.print(componentName);
  }
  
  validarMatricula(numeroMatricula){
    let dados ={
      requisicao: "testeMatricula",
      matricula: numeroMatricula
    }
    this.provider.requisicaoPost(dados, "/alunos.php").subscribe((data)=>{
      if(data['situacao'] == true){ 
        this.ionViewWillEnter();
      }else{
        this.numeroMatricula = numeroMatricula;
        this.setarContas()
      }
    },(error)=>{
      console.log(error);
      this.presentAlert("Não foi possivel cadastrar matrícula.<br> Tente mais tarde");
      this.route.navigate(["/dashboard/"+this.token]);
    })
  }
  
  alternarBotao2(){
    console.log("entrou")
    if(this.pim2 == "Sim"){//
      this.talvez2 = false;
    }
    else{
      this.talvez2 = true;
    }
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
          this.enderecoEscola = data['dados'][0].endereco;
          this.escola =  data['dados'][0].login;
          this.areaEscola =  data['dados'][0].area;
          this.distrito =  data['dados'][0].distrito;
          
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
  setarContas(){
    let dados ={
      requisicao: "pegarEscolaPeloToken",
      obs: this.token
    }
    this.provider.requisicaoPost(dados, "/educacao.php").subscribe((data)=>{

    },(error)=>{
      console.log(error);
    })
  }
  async presentLoading(mensagem) {
    const loading = await this.loadingController.create({
      cssClass: 'primary',
      message: mensagem,
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }
  matricular(){
    let dados = {
        requisicao: "matricular",
        escola: this.escola,
        enderecoEscola: this.enderecoEscola,
        distrito: this.distrito,
        diretora: this.diretora,
        escolaridadeDiretora: this.escolaridadeDiretora,
        nomeAluno: this.nomeAluno,
        serie: this.serie,
        documento: this.tipoDocumento +""+this.documento,
        dataNascimento: this.dataAjustadaNascimento,
        idade: this.idade,
        naturalidade: this.naturalidade,
        sexo: this.sexo,
        orientacaoSexual: this.orientacaoSexual,
        numeroMatricula: this.numeroMatricula,
        anoLetivo: this.anoLetivo,
        idSenso: this.idSenso,
        nomeResponsavel1: this.nomeResponsavel1,
        nomeResponsavel2: this.nomeResponsavel2,
        nomeResponsavel3: this.nomeResponsavel3,
        profissaoResponsavel1: this.profissaoResponsavel1,
        profissaoResponsavel2: this.profissaoResponsavel2,
        telefoneResponsavel1: this.telefoneResponsavel1,
        telefoneResponsavel2: this.telefoneResponsavel2,
        telefoneResponsavel3: this.telefoneResponsavel3,
        turno: this.turno,
        cartaoSUS: this.cartaoSUS,
        numeroCamisa: this.numeroCamisa,
        enderecoAluno: this.enderecoAluno,
        dataMatricula: this.dataMatricula,
        deficiencia: this.deficiencia,
        areaAluno: this.areaAluno,
        observacoes: this.observacoes,
        areaEscola: this.areaEscola,
        escolaAntiga: this.escolaAntiga,
        raca: this.raca,
        religiao: this.religiao,
        alergia: this.alergia,
        contatoEmergenciaNome: this.contatoEmergenciaNome,
        contatoEmergenciaTelefone: this.contatoEmergenciaTelefone,
        nomeResponsavelPegador: this.nomeResponsavelPegador,
      }
      this.provider.requisicaoPost(dados, "/alunos.php").subscribe((data)=>{
      console.log(data);
      if(data['situacao'] == true){
//        this.presentAlert(data['mensagem']);
        this.presentAlertConfirm("Dados salvos com sucesso.<br>Escolha uma opção.", +data['id'][0])
      }
      else{
        this.presentAlert(data['mensagem']);
      }
    },(error)=>{
      console.log(error);
    })
  }
  voltar(){
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
  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
  }

  alternarBotao(){
    console.log("entrou")
    if(this.pim == "Sim"){
      this.talvez = true
    }
    else{
      this.talvez = false;
    }
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
            this.route.navigate(["/emprimir/"+id+"/"+this.token]);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  botarBarra1() {
    if (this.dataAjustadaNascimento.length == 2) {
      this.dataAjustadaNascimento = this.dataAjustadaNascimento + ".";
    }
    if (this.dataAjustadaNascimento.length == 5) {
        this.dataAjustadaNascimento = this.dataAjustadaNascimento + ".";
      }
  }
  
  botarBarra2() {
    if (this.dataMatricula.length == 2) {
      this.dataMatricula = this.dataMatricula + ".";
    }
    if (this.dataMatricula.length == 5) {
        this.dataMatricula = this.dataMatricula + ".";
      }
  }

  gerarMatricula(){
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
}
