import { PostProvider } from '../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
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
  escolaDisable: boolean = false;
  serieCreche: string = "";
  dataNascimentoAjustado: string = "";
  tipoDocumento: string = "";
  documento: string = "";
  nomeResponsavel3: string = "";
  numeroCamisa: string = "";
  cartaoSUS: string = "";
  profissaoResponsavel1: string = "";
  profissaoResponsavel2: string = "";
  teletoneResponsavel1: string = "";
  teletoneResponsavel2: string = "";
  teletoneResponsavel3: string = "";
  escolaAntiga: string = "";
  dataMatriculaAjustado: string = "";
  raca: string = "";
  religiao: string = "";
  alergia: string = "";
  contatoEmergenciaNome: string = "";
  contatoEmergenciaTelefone: string = "";
  pim: string = "";
  nomeResponsavelPegador: string = "";
  talvez: boolean = false;
  enderecoEscolaDisable: boolean = false;
  areaDisable: boolean = false;
  distritoDisable: boolean = false;
  series = [
    {nome: "Creche"},{nome: "Pré I"},{nome: "Pré II"}, {nome: "1º ano"},{nome: "2º ano"}, {nome: "3º ano"}, {nome: "4º ano"}, {nome: "5º ano"},
    {nome: "EPJAI (eixo I) 1º e 2º"}, {nome: "EPJAI (eixo II) 3º e 4º"}, {nome: "6º ano"}, {nome: "7º ano"}, {nome: "8º ano"},
    {nome: "9º ano"}, {nome: "EPJAI (eixo III) 5º e 6º"}, {nome: "EPJAI (eixo IV) 7º e 8º"}
  ]

  seriesAlfa =[{nome: "De zero 1 ano e 6 meses"}, {nome: "De 1 ano e 7 meses a 3 anos e 11 meses"}]

  escolas = [
    { "nome": "Antonio Otilio de Andrade"},
    { "nome": "Antonio Vigílio de Medina" },
    { "nome": "Catarina Paraguaçu"},
    { "nome": "Cid Seixas Fragas"},
    { "nome": "Cleriston Andrade"},
    { "nome": "Cons. Antonio Rebouças"},
    { "nome": "Creche Dr. Luis de Souza Santos"},
    { "nome": "Creche Germana Ines Mencione"},
    { "nome": "Creche Ieda Barradas"},
    { "nome": "Creche Igor Seixas"},
    { "nome": "Creche Semente do Paraguaçu"},
    { "nome": "Deputado Cleraldo Andrade"},
    { "nome": "Desembargador Oscar Dantas"},
    { "nome": "Do Camarão"},
    { "nome": "Dr. Odilardo Uzeda Rodrigues"},
    { "nome": "Edith Ribeiro Nunes"},
    { "nome": "Emídio Dativo Santana"},
    { "nome": "Engenheiro Júlio dos Santos Sá"},
    { "nome": "Fernando Presídio"},
    { "nome": "Gastão Pedreira"},
    { "nome": "Getulio Vargas (Cachoeirinha)"},
    { "nome": "Getulio Vargas (Trevo)"},
    { "nome": "Heráclio Paraguaçu Guerreiro"},
    { "nome": "Hildérico Pinheiro de Oliveira"},
    { "nome": "Juvenil de Oliveira"},
    { "nome": "Luiz Eduardo Magalhães"},
    { "nome": "Mario Gordilho Pedreira"},
    { "nome": "Meneleu Batista Soares"},
    { "nome": "Menino Jesus de Praga"},
    { "nome": "Mons. Florisvaldo José de Souza"},
    { "nome": "Nossa Senhora da Piedade"},
    { "nome": "Nossa Senhora de Fátima"},
    { "nome": "Nova Jerusalém"},
    { "nome": "O bom pastor"},
    { "nome": "Osvaldina Oliveira"},
    { "nome": "Otaviano Texeira"},
    { "nome": "Pe. Julian Edward Josef Claes"},
    { "nome": "Profº Adjovita Marques"},
    { "nome": "Profº Noêmia do Rosário"},
    { "nome": "Profº Luis da França Piedade"},
    { "nome": "Quilombo do Putumuju"},
    { "nome": "Raio de Luz"},
    { "nome": "Recanto Verde"},
    { "nome": "Ref. Plínio Pereira Guedes"},
    { "nome": "Ruben GUerra Armede"},
    { "nome": "Creche Guapira"},
    { "nome": "Luiz Souza Santos"},
    { "nome": "Santa Helena"},
    { "nome": "Santa Rita"},
    { "nome": "Santo Antonio (Cachoeirinha)"},
    { "nome": "Santo Antonio (Guaruçu)"},
    { "nome": "Santo Antonio (Irriquitiá)"},
    { "nome": "Santo Antonio (Rio dos Paus)"},
    { "nome": "São Gabriel - Bento Sardinha"},
    { "nome": "São José - Santa Angela"},
    { "nome": "Sementes do Paraguaçu"},
    { "nome": "São Roque - Boa Vista"},
    { "nome": "Senhor do Bonfim - Brinco"},
    { "nome": "Silvio Vieira de Melo"},
  ]

  constructor(
    private platform: Platform,
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
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
  ionViewWillEnter(){
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs, data.id);
    });
      this.alternar = true;
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
        if(data['dados'][0].categoria == "escola"){ // se for escola
          this.enderecoEscola = data['dados'][0].endereco;
          this.escola =  data['dados'][0].login;
          this.areaEscola =  data['dados'][0].area;
          this.distrito =  data['dados'][0].distrito;
          this.enderecoEscolaDisable = true;
          this.escolaDisable = true;
          this.areaDisable = true;
          this.distritoDisable = true;
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
        this.teletoneResponsavel1 = c.teletoneResponsavel1;
        this.teletoneResponsavel2 = c.teletoneResponsavel2;
        this.teletoneResponsavel3 = c.teletoneResponsavel3;
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

  teste(){
    var dia, mes, ano;
    ano = this.dataMatricula.substring(0,4);
    mes = this.dataMatricula.substring(5,7)
    dia = this.dataMatricula.substring(8,10)
    this.dataMatriculaAjustado = dia.concat("\\\\")+mes.concat("\\\\")+ano;
  }
  teste2(){
    var dia, mes, ano;
    ano = this.dataNascimento.substring(0,4);
    mes = this.dataNascimento.substring(5,7)
    dia = this.dataNascimento.substring(8,10)
    this.dataNascimentoAjustado = dia.concat("\\\\")+mes.concat("\\\\")+ano;
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
      dataNascimento: this.dataNascimentoAjustado,
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
      teletoneResponsavel1: this.teletoneResponsavel1,
      teletoneResponsavel2: this.teletoneResponsavel2,
      teletoneResponsavel3: this.teletoneResponsavel3,
      turno: this.turno,
      idSenso: this.idSenso,
      enderecoAluno: this.enderecoAluno,
      dataMatricula: this.dataMatriculaAjustado,
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
