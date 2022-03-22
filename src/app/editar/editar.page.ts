import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from '../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  alternar: boolean = true;
  token: string = "";
  verificar: boolean = false; // se pode mostrar ou nao
  pim2 = "Sim";
  talvez2: boolean = false;

  idSenso: string = "";
  id: string = "";
  escola: string = "";
  enderecoEscola: string = "";
  distrito: string = "";
  diretora: string = "";
  escolaridadeDiretora: string = "";
  nomeAluno: string = "";
  serie: string = "";
  cpf: string = "";
  dataNascimento: string = "";
  idade: string = "";
  naturalidade: string = "";
  sexo: string = "";
  observacoes: string = "";
  anoLetivo: string = "";
  nomeResponsavel1: string = "";
  nomeResponsavel2: string = "";
  turno: string = "";
  enderecoAluno: string = "";
  dataMatricula: string = "";
  deficiencia: string = "";
  area: string = "";
  areaAluno: string = "";
  areaEscola: string = "";
  serieCreche: string = "";
  tipoDocumento: string = "";
  documento: string = "";
  nomeResponsavel3: string = "";
  numeroCamisa: string = "";
  cartaoSUS: string = "";
  profissaoResponsavel1: string = "";
  profissaoResponsavel2: string = "";
  telefoneResponsavel1: string = "";
  telefoneResponsavel2: string = "";
  telefoneResponsavel3: string = "";
  escolaAntiga: string = "";
//  dataMatriculaAjustado: string = "";
  raca: string = "";
  religiao: string = "";
  alergia: string = "";
  contatoEmergenciaNome: string = "";
  contatoEmergenciaTelefone: string = "";
  pim: string = "";
  nomeResponsavelPegador: string = "";
  talvez: boolean = false;
  
  areaDisable: boolean = false;
  distritoDisable: boolean = false;
  series = [
    {nome: "Creche"},{nome: "Pré I"},{nome: "Pré II"}, {nome: "1º ano"},{nome: "2º ano"}, {nome: "3º ano"}, {nome: "4º ano"}, {nome: "5º ano"},
    {nome: "EPJAI (eixo I) 1º e 2º"}, {nome: "EPJAI (eixo II) 3º e 4º"}, {nome: "6º ano"}, {nome: "7º ano"}, {nome: "8º ano"},
    {nome: "9º ano"}, {nome: "EPJAI (eixo III) 5º e 6º"}, {nome: "EPJAI (eixo IV) 7º e 8º"}
  ]

  seriesAlfa =[{nome: "De zero 1 ano e 6 meses"}, {nome: "De 1 ano e 7 meses a 3 anos e 11 meses"}]

  escolas = []

  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  alternarBotao2(){
    console.log("entrou")
    if(this.pim2 == "Sim"){
      this.talvez2 = false;
    }
    else{
      this.talvez2 = true;
    }
  }
  ionViewWillEnter(){
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
    if (this.dataMatricula.length == 2) {
      this.dataMatricula = this.dataMatricula + ".";
    }
    if (this.dataMatricula.length == 5) {
        this.dataMatricula = this.dataMatricula + ".";
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
        this.pegarDado(id);
        if(data['dados'][0].categoria == "escola"){
          this.enderecoEscola = data['dados'][0].endereco;
          this.escola =  data['dados'][0].login;
          this.areaEscola =  data['dados'][0].area;
          this.distrito =  data['dados'][0].distrito;
          
          this.escolas = [{ nome: data['dados'][0].login }]
          this.areaDisable = true;
          this.distritoDisable = true;
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

  pegarDado(id){
    let dados ={
      requisicao: "pesquisaIndividual",
      id: id
    }
    this.provider.requisicaoPost(dados,"/alunos.php").subscribe((data)=>{
      for(let c of data['resultado']){
        this.id = c.id;
        this.escola = c.escola;
        this.enderecoEscola = c.enderecoEscola;
        this.distrito = c.distrito;
        this.diretora = c.diretora;
        this.escolaridadeDiretora = c.escolaridadeDiretora;
        this.nomeAluno = c.nomeAluno;
        this.serie = c.serie;
        this.cpf = c.cpf;
        this.dataNascimento = c.dataNascimento;
        this.idade = c.idade;
        this.naturalidade = c.naturalidade;
        this.sexo = c.sexo;
        this.anoLetivo = c.anoLetivo;
        this.cartaoSUS = c.cartaoSUS;
        this.numeroCamisa = c.numeroCamisa
        this.nomeResponsavel1 = c.nomeResponsavel1;
        this.nomeResponsavel2 = c.nomeResponsavel2;
        this.turno = c.turno;
        this.observacoes = c.observacoes;
        this.enderecoAluno = c.enderecoAluno;
        this.dataMatricula = c.dataMatricula;
        this.deficiencia = c.deficiencia;
        this.tipoDocumento = c.tipoDocumento;
        this.documento = c.documento;
        this.nomeResponsavel3 = c.nomeResponsavel3;
        this.profissaoResponsavel1 = c.profissaoResponsavel1;
        this.profissaoResponsavel2 = c.profissaoResponsavel2;
        this.telefoneResponsavel1 = c.telefoneResponsavel1;
        this.telefoneResponsavel2 = c.telefoneResponsavel2;
        this.telefoneResponsavel3 = c.telefoneResponsavel3;
        this.escolaAntiga = c.escolaAntiga;
        this.raca = c.raca;
        this.idSenso = c.idSenso;
        this.religiao = c.religiao;
        this.alergia = c.alergia;
        this.contatoEmergenciaNome = c.contatoEmergenciaNome;
        this.contatoEmergenciaTelefone = c.contatoEmergenciaTelefone;
        this.pim = c.pim;
        console.log(this.serie)
        break;
      }
    },(error)=>{
      console.log(error);
    })
  }

  
  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
  }

  salvar(){
    let dados = {
      requisicao: "salvarMatricula",
      id: this.id,
      escola: this.escola,
      enderecoEscola: this.enderecoEscola,
      distrito: this.distrito,
      diretora: this.diretora,
      escolaridadeDiretora: this.escolaridadeDiretora,
      nomeAluno: this.nomeAluno,
      serie: this.serie,
      documento: this.tipoDocumento +" "+this.documento,
      dataNascimento: this.dataNascimento,
      idade: this.idade,
      naturalidade: this.naturalidade,
      sexo: this.sexo,
      cartaoSUS:this.cartaoSUS,
      numeroCamisa: this.numeroCamisa,
      anoLetivo: this.anoLetivo,
      nomeResponsavel1: this.nomeResponsavel1,
      nomeResponsavel2: this.nomeResponsavel2,
      nomeResponsavel3: this.nomeResponsavel3,
      profissaoResponsavel1: this.profissaoResponsavel1,
      profissaoResponsavel2: this.profissaoResponsavel2,
      telefoneResponsavel1: this.telefoneResponsavel1,
      telefoneResponsavel2: this.telefoneResponsavel2,
      telefoneResponsavel3: this.telefoneResponsavel3,
      turno: this.turno,
      idSenso: this.idSenso,
      enderecoAluno: this.enderecoAluno,
      dataMatricula: this.dataMatricula,
      deficiencia: this.deficiencia,
      areaAluno: this.areaAluno,
      areaEscola: this.areaEscola,
      escolaAntiga: this.escolaAntiga,
      raca: this.raca,
      religiao: this.religiao,
      alergia: this.alergia,
      observacoes: this.observacoes,
      contatoEmergenciaNome: this.contatoEmergenciaNome,
      contatoEmergenciaTelefone: this.contatoEmergenciaTelefone,
      nomeResponsavelPegador: this.nomeResponsavelPegador,
    }
    this.provider.requisicaoPost(dados, "/alunos.php").subscribe((data)=>{
      if(data['situacao'] == true){
        this.presentAlert("Dados alterados com sucesso.");
        this.route.navigate(["/dashboard/"+this.token]);
      }else{
        this.presentAlert("Não foi possivel alterar a matrícula.<br>Tente novamente.");
      }
    },(error)=>{
      console.log(error);
    })
  }

  async excluir(){
    
    const alert = await this.alertController.create({
      message: "Tem certeza que deseja excluir ?",
      buttons: [
        {
          text: 'Apagar matrícula',
          handler: () => {
            let dados = {
              requisicao: "deletarMatricula",
              id: this.id
            }
            this.provider.requisicaoPost(dados, "/alunos.php").subscribe((data)=>{
              if(data['situacao'] == true){
                this.presentAlert("Matrícula apagada com sucesso.");
                this.route.navigate(["/dashboard/"+this.token]);
              }else{
                this.presentAlert("Não foi possivel deletar a matricula.<br>Tente novamente.");
              }
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

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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
}
