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
    { "nome": "São Roque - Boa Vista"},
    { "nome": "Sementes do Paraguaçu"},
    { "nome": "Senhor do Bonfim - Brinco"},
    { "nome": "Silvio Vieira de Melo"},
  ]

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
