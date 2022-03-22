import { PrintProvider } from './../../assets/providers/print-provider';
import { PostProvider } from './../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprimir-professor',
  templateUrl: './emprimir-professor.page.html',
  styleUrls: ['./emprimir-professor.page.scss'],
})
export class EmprimirProfessorPage implements OnInit {

  professores = [];
  alternar: boolean = true;
  token: string = "";
  verificar: boolean = true;
  id: string = "";
  escolaEnsino: string = "";
  diretorDele: string = "";
  enderecoEscolaAtua: string = "";
  zonaEscolaAtua: string = "";
  enderecoEscolaHoraExtra: string = "";
  zonaEscolaExtra: string = "";
  distritoEscolaExtra: string = "";
  materia2: string = "";
  materia1: string = "";
  observacoes: string = "";
  diretorSegundaEscola: string = "";
  turnoEscolaExtra: string = "";
  cargaHorariaAdcional: string = "";
  QualEscolaHoraExtra: string = "";
  cargaHoraria: string = "";
  turnoEscolaNormal: string = "";
  disciplinaAtuacao: string = "";
  condicao: string = "";
  formacao: string = "";
  dataNascimento: string = "";
  nome: string = "";
  distritoEscolaAtua: string = "";

  escolas = []

  constructor(
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController,
    private printProvider: PrintProvider
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.professores = [];
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs,data.id);
      this.id = data.id;
      this.carregarEscolas();
    });
    
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    if(this.platform.is("desktop")){
      this.alternar = true;
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
  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
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
        let dados2 = {
          requisicao: "editar1Perfil",
          id: id
        }
        this.id = id;
        this.provider.requisicaoPost(dados2,"/professores.php").subscribe((data)=>{
          for(let c of data['resultado']){
            this.escolaEnsino = c.escolaEnsino;
            this.diretorDele = c.diretorDele;
            this.enderecoEscolaAtua = c.enderecoEscolaAtua;
            this.zonaEscolaAtua = c.zonaEscolaAtua;
            this.enderecoEscolaHoraExtra = c.enderecoEscolaHoraExtra;
            this.zonaEscolaExtra = c.zonaEscolaExtra;
            this.distritoEscolaExtra = c.distritoEscolaExtra;
            this.materia2 = c.materia2;
            this.diretorSegundaEscola = c.diretorSegundaEscola;
            this.turnoEscolaExtra = c.turnoEscolaExtra;
            this.cargaHorariaAdcional = c.cargaHorariaAdcional;
            this.QualEscolaHoraExtra = c.QualEscolaHoraExtra;
            this.cargaHoraria = c.cargaHoraria;
            this.turnoEscolaNormal = c.turnoEscolaNormal;
            this.disciplinaAtuacao = c.disciplinaAtuacao;
            this.condicao = c.condicao;
            this.materia1 = c.materia1;
            this.formacao = c.formacao;
            this.dataNascimento = c.dataNascimento;
            this.nome = c.nome;
            this.distritoEscolaAtua = c.distritoEscolaAtua;
            this.observacoes = c.observacoes;
          }
          console.log(this.dataNascimento)
        },(error)=>{
          console.log(error)
        });
      }
    },(error)=>{
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }

  print(componentName) {
    this.printProvider.print(componentName);
  }
  voltar(){
      this.route.navigate(["/professores/"+this.token]);
  }

}
