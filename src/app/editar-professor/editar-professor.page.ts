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
  escolaDisable: boolean = false;
  distritoEscolaAtua: string = "";
  dataNascimentoAjustado: string = "";
  enderecoEscolaDisable: boolean = false;
  areaDisable: boolean = false;
  distritoDisable: boolean = false;
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
    { "nome": "Creche Guapira"},
    { "nome": "Luiz Souza Santos"},
    { "nome": "Ruben GUerra Armede"},
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

  escolas2 = [
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
    { "nome": "Creche Guapira"},
    { "nome": "Luiz Souza Santos"},
    { "nome": "Ruben GUerra Armede"},
    { "nome": "Santa Helena"},
    { "nome": "Santa Rita"},
    { "nome": "Santo Antonio (Cachoeirinha)"},
    { "nome": "Santo Antonio (Guaruçu)"},
    { "nome": "Santo Antonio (Irriquitiá)"},
    { "nome": "Santo Antonio (Rio dos Paus)"},
    { "nome": "São Gabriel - Bento Sardinha"},
    { "nome": "São José - Santa Angela"},
    { "nome": "São Roque - Boa Vista"},
    { "nome": "Sementes do Paraguaçu"},
    { "nome": "Senhor do Bonfim - Brinco"},
    { "nome": "Silvio Vieira de Melo"},
    { "nome": "Outros"},
    { "nome": "Não se aplica"},
  ]
  constructor(
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.professores = [];
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs,data.id);
      this.id = data.id;
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
    this.dataNascimentoAjustado = dia.concat("\\\\")+mes.concat("\\\\")+ano;
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
            this.materia1 = c.materia1;
            this.condicao = c.condicao;
            this.formacao = c.formacao;
            this.dataNascimento = c.dataNascimento;
            this.nome = c.nome;
            this.observacoes = c.observacoes;
            this.distritoEscolaAtua = c.distritoEscolaAtua;
            this.disciplinaAtuacao = c.disciplinaAtuacao;
          }
        },(error)=>{
          console.log(error)
        });
        if(data['dados'][0].categoria == "escola"){ // se for escola
          this.enderecoEscolaAtua = data['dados'][0].endereco;
          this.escolaEnsino =  data['dados'][0].login;
          this.zonaEscolaAtua =  data['dados'][0].area;
          this.distritoEscolaAtua =  data['dados'][0].distrito;
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

  Salvar(){
    
    let dados;
    if(this.QualEscolaHoraExtra == "Outros"){
      dados= {
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
    }else{
      dados= {
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
    this.provider.requisicaoPost(dados,"/professores.php").subscribe((data)=>{
      this.route.navigate(["/professores/"+this.token]);
    },(error)=>{
      console.log(error)
    })
  }
  cancelar(){
    this.route.navigate(["/professores/"+this.token]);
  }
}
