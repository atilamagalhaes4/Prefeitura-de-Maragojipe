import { PrintProvider } from './../../assets/providers/print-provider';
import { PostProvider } from './../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprimir',
  templateUrl: './emprimir.page.html',
  styleUrls: ['./emprimir.page.scss'],
})
export class EmprimirPage implements OnInit {

  alternar: boolean = true;
  token: string = "";
  verificar: boolean = false; // se pode mostrar ou nao

  idSenso: string = "";
  id: string = "";
  escola: string = "";
  enderecoEscola: string = "";
  distrito: string = "";
  diretora: string = "";
  escolaridadeDiretora: string = "";
  nomeAluno: string = "";
  serie: string = "";
  documento: string = "";
  dataNascimento: string = "";
  idade: string = "";
  naturalidade: string = "";
  sexo: string = "";
  anoLetivo: string = "";
  nomeResponsavel1: string = "";
  nomeResponsavel2: string = "";
  turno: string = "";
  enderecoAluno: string = "";
  cartaoSUS: string = "";
  numeroCamisa: string = "";
  dataMatricula: string = "";
  deficiencia: string = "";
  areaAluno: string = "";
  observacoes: string = "";
  areaEscola: string = "";
  nomeResponsavelPegador: string = "";
  contatoEmergenciaTelefone: string = "";
  contatoEmergenciaNome: string = "";
  telefoneResponsavel3: string = "";
  nomeResponsavel3: string = "";
  profissaoResponsavel2: string = "";
  telefoneResponsavel2: string = "";
  profissaoResponsavel1: string = "";
  telefoneResponsavel1: string = "";
  religiao: string = "";
  escolaAntiga:"";
  alergia:"";
  raca: string = "";
  numeroMatricula: string = "";
  constructor(
    private platform: Platform,
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController,
    private printProvider:PrintProvider
  ) { }

  ngOnInit() {
  }

  voltar(){
    this.route.navigate(["/consulta/"+this.token]);
  }

  print(componentName) {
    this.printProvider.print(componentName);
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
        this.idSenso = c.idSenso;
        this.documento = c.documento;
        this.telefoneResponsavel2 = c.telefoneResponsavel2;
        this.dataNascimento = c.dataNascimento;
        this.idade = c.idade;
        this.nomeResponsavel3 = c.nomeResponsavel3;
        this.profissaoResponsavel2 = c.profissaoResponsavel2;
        this.religiao = c.religiao;
        this.raca = c.raca;
        this.telefoneResponsavel1 = c.telefoneResponsavel1;
        this.observacoes = c.observacoes;
        this.naturalidade = c.naturalidade;
        this.profissaoResponsavel1 = c.profissaoResponsavel1;
        this.escolaAntiga = c.escolaAntiga;
        this.alergia = c.alergia;
        this.contatoEmergenciaTelefone = c.contatoEmergenciaTelefone;
        this.contatoEmergenciaNome = c.contatoEmergenciaNome;
        this.sexo = c.sexo;
        this.numeroCamisa = c.numeroCamisa;
        this.cartaoSUS = c.cartaoSUS;
        this.numeroMatricula = c.numeroMatricula;
        this.nomeResponsavelPegador = c.nomeResponsavelPegador;
        this.anoLetivo = c.anoLetivo;
        this.nomeResponsavel1 = c.nomeResponsavel1;
        this.turno = c.turno;
        this.telefoneResponsavel3 = c.telefoneResponsavel3;
        this.nomeResponsavel2 = c.nomeResponsavel2;
        this.enderecoAluno = c.enderecoAluno;
        this.dataMatricula = c.dataMatricula;
        this.deficiencia = c.deficiencia;
        this.areaAluno = c.areaAluno;
        this.areaEscola = c.areaEscola;
        break;
      }
    },(error)=>{
      console.log(error);
    })
  }


}
