import { PostProvider } from './../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.page.html',
  styleUrls: ['./editar-professor.page.scss'],
})
export class EditarProfessorPage implements OnInit {

  professores = [];
  alternar: boolean = true;
  token: string = "";
  verificar: boolean = true;
  pim2: string = "Não"
  talvez2: boolean = true;
  id: string = "";
  escolaEnsino: string = "";
  diretorDele: string = "";
  enderecoEscolaAtua: string = "";
  zonaEscolaAtua: string = "";
  disciplinaAtuacao: string = "";
  enderecoEscolaHoraExtra: string = "";
  zonaEscolaExtra: string = "";
  distritoEscolaExtra: string = "";
  materia2: string = "";
  diretorSegundaEscola: string = "";
  turnoEscolaExtra: string = "";
  cargaHorariaAdcional: string = "";
  QualEscolaHoraExtra: string = "";
  cargaHoraria: string = "";
  outraEscola: string = "";
  turnoEscolaNormal: string = "";
  materia1: string = "";
  condicao: string = "";
  observacoes: string = "";
  formacao: string = "";
  dataNascimento: string = "";
  nome: string = "";
  distritoEscolaAtua: string = "";
  dataNascimentoAjustado: string = "";
  
  areaDisable: boolean = false;
  distritoDisable: boolean = false;

  escolas = []
  escolas2 = []

  constructor(
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.professores = [];
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs, data.id);
      this.id = data.id;
    });

    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    if (this.platform.is("desktop")) {
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
      this.escolas2 = this.escolas;
    }, (error) => {
      console.log(error);
    })
  }
  inicio() {
    this.route.navigate(["/dashboard/" + this.token]);
  }
  botarBarra1() {
    if (this.dataNascimento.length == 2) {
      this.dataNascimento = this.dataNascimento + ".";
    }
    if (this.dataNascimento.length == 5) {
      this.dataNascimento = this.dataNascimento + ".";
    }
  }
  alternarBotao2() {
    console.log("entrou")
    if (this.pim2 == "Sim") {//
      this.talvez2 = false;
    }
    else {
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
  teste2() {
    var dia, mes, ano;
    ano = this.dataNascimento.substring(0, 4);
    mes = this.dataNascimento.substring(5, 7)
    dia = this.dataNascimento.substring(8, 10)
    this.dataNascimentoAjustado = dia.concat("\\\\") + mes.concat("\\\\") + ano;
  }
  validar(verificacao, id) {
    let dados = {
      requisicao: "verificacao",
      token: verificacao
    }
    this.token = verificacao;

    this.provider.requisicaoPost(dados, "/educacao.php").subscribe((data) => {
      this.verificar = data['resultado'];
      if (this.verificar == false) {
        this.route.navigate(["/login"]);
      } else {
        let dados2 = {
          requisicao: "editar1Perfil",
          id: id
        }
        this.id = id;
        this.provider.requisicaoPost(dados2, "/professores.php").subscribe((data) => {
          for (let c of data['resultado']) {
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
            this.materia1 = c.materia1;
            this.condicao = c.condicao;
            this.formacao = c.formacao;
            this.dataNascimento = c.dataNascimento;
            this.nome = c.nome;
            this.observacoes = c.observacoes;
            this.distritoEscolaAtua = c.distritoEscolaAtua;
            this.disciplinaAtuacao = c.disciplinaAtuacao;
          }
        }, (error) => {
          console.log(error)
        });
        if (data['dados'][0].categoria == "escola") { // se for escola
          this.enderecoEscolaAtua = data['dados'][0].endereco;
          this.escolaEnsino = data['dados'][0].login;
          this.zonaEscolaAtua = data['dados'][0].area;
          this.distritoEscolaAtua = data['dados'][0].distrito;
          
          this.areaDisable = true;
          this.distritoDisable = true;
          this.escolas = [{ nome: data['dados'][0].login }]
        }
        else{
          this.carregarEscolas();
        }
      }
    }, (error) => {
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }

  Salvar() {

    let dados;
    if (this.QualEscolaHoraExtra == "Outros") {
      dados = {
        requisicao: "editarProfessor",
        id: this.id,
        escolaEnsino: this.escolaEnsino,
        diretorDele: this.diretorDele,
        enderecoEscolaAtua: this.enderecoEscolaAtua,
        zonaEscolaAtua: this.zonaEscolaAtua,
        enderecoEscolaHoraExtra: this.enderecoEscolaHoraExtra,
        zonaEscolaExtra: this.zonaEscolaExtra,
        distritoEscolaExtra: this.distritoEscolaExtra,
        materia2: this.materia2,
        diretorSegundaEscola: this.diretorSegundaEscola,
        turnoEscolaExtra: this.turnoEscolaExtra,
        cargaHorariaAdcional: this.cargaHorariaAdcional,
        QualEscolaHoraExtra: this.outraEscola,
        cargaHoraria: this.cargaHoraria,
        turnoEscolaNormal: this.turnoEscolaNormal,
        materia1: this.materia1,
        condicao: this.condicao,
        observacoes: this.observacoes,
        disciplinaAtuacao: this.disciplinaAtuacao,
        formacao: this.formacao,
        dataNascimento: this.dataNascimentoAjustado,
        nome: this.nome,
        distritoEscolaAtua: this.distritoEscolaAtua,
      }
    } else {
      dados = {
        requisicao: "editarProfessor",
        id: this.id,
        escolaEnsino: this.escolaEnsino,
        diretorDele: this.diretorDele,
        enderecoEscolaAtua: this.enderecoEscolaAtua,
        zonaEscolaAtua: this.zonaEscolaAtua,
        enderecoEscolaHoraExtra: this.enderecoEscolaHoraExtra,
        zonaEscolaExtra: this.zonaEscolaExtra,
        distritoEscolaExtra: this.distritoEscolaExtra,
        materia2: this.materia2,
        diretorSegundaEscola: this.diretorSegundaEscola,
        turnoEscolaExtra: this.turnoEscolaExtra,
        cargaHorariaAdcional: this.cargaHorariaAdcional,
        QualEscolaHoraExtra: this.QualEscolaHoraExtra,
        cargaHoraria: this.cargaHoraria,
        turnoEscolaNormal: this.turnoEscolaNormal,
        materia1: this.materia1,
        condicao: this.condicao,
        observacoes: this.observacoes,
        disciplinaAtuacao: this.disciplinaAtuacao,
        formacao: this.formacao,
        dataNascimento: this.dataNascimentoAjustado,
        nome: this.nome,
        distritoEscolaAtua: this.distritoEscolaAtua,
      }
    }
    this.provider.requisicaoPost(dados, "/professores.php").subscribe((data) => {
      this.route.navigate(["/professores/" + this.token]);
    }, (error) => {
      console.log(error)
    })
  }
  cancelar() {
    this.route.navigate(["/professores/" + this.token]);
  }
}
