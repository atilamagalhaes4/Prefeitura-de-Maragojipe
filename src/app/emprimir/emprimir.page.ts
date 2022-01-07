import { PrintProvider } from './../../assets/providers/print-provider';
import { PostProvider } from './../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-emprimir',
  templateUrl: './emprimir.page.html',
  styleUrls: ['./emprimir.page.scss'],
})
export class EmprimirPage implements OnInit {

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(
    private platform: Platform,
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController,
    private printProvider:PrintProvider
  ) { }
  
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

  downloadImage(){
    //npm i html2canvas
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      var popup=window.open();
      popup.document.write ('<img src =' + canvas.toDataURL() + '>');
      popup.document.close ();
      popup.focus ();
      setTimeout(function (){
        popup.print();
        popup.close ();
      }, 1000);
    })
      /*
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = this.nomeAluno+'.png';
      this.downloadLink.nativeElement.click();
    });*/
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
