import { PrintProvider } from './../../assets/providers/print-provider';
import { PostProvider } from './../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  alternar: boolean = true;
  token: string = "";
  verificar: boolean = false;
  pesquisa: string = "";
  alunos: any = [];

  pesquisaSerie = "";
  pesquisaEscola = "";
  pesquisaTurno = "";
  teste: boolean = false;
  qtd: number = 0;
  anoLetivo: string = ""
  diretora: string = ""
  escolaridade: string = "";
  escola: string ="";
  turno: string ="";
  serie: string = "";
  escolaDisable: boolean = false;
  zona: string = "";
  
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

  constructor(
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private route: Router,
    private provider: PostProvider,
    private alertController: AlertController,
    private printProvider: PrintProvider
  ) { }

  ngOnInit() {
  }

  
  ionViewWillEnter(){
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
    });
      this.alternar = true;
  }

  validar(verificacao){
    this.alunos = [];
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
//          this.enderecoEscola = data['dados'][0].endereco;
          this.pesquisaEscola =  data['dados'][0].login;
  //        this.areaEscola =  data['dados'][0].area;
    //      this.distrito =  data['dados'][0].distrito;
      //    this.enderecoEscolaDisable = true;
          this.escolaDisable = true;
        //  this.areaDisable = true;
          //this.distritoDisable = true;
          this.osPrimeiros1(data['dados'][0].login);
        }else{
          this.osPrimeiros();
        }

      }
    },(error)=>{
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }

  osPrimeiros(){

    let dados ={
      requisicao: "20Primeiros"
    }
    this.provider.requisicaoPost(dados,"/alunos.php").subscribe((data)=>{
      this.alunos = [];
      this.qtd =0
      for(let c of data['resultado']){
        this.qtd++;
        this.alunos.push(c);
        this.diretora = "Indefinido";
        this.escolaridade = "Indefinido";
        this.escola = "Indefinido";
        this.turno = "Indefinido";
        this.serie = "Indefinido";
        this.anoLetivo = "Indefinido";
        this.zona = "Indefinido";
      }
      console.log(this.alunos.length);
    },(error)=>{
      console.log(error);
    });
  }

  osPrimeiros1(escola){

    let dados ={
      requisicao: "20PrimeirosOPC",
      escola: escola
    }
    this.provider.requisicaoPost(dados,"/alunos.php").subscribe((data)=>{
      this.alunos = [];
      this.qtd =0
      for(let c of data['resultado']){
        this.qtd++;
        this.alunos.push(c);
        this.diretora = c.diretora;
        this.escolaridade = c.escolaridade;
        this.escola = c.escola;
        this.turno = c.turno;
        this.serie = c.serie;
        this.anoLetivo = c.anoLetivo;
        this.zona = c.zona;
      }
      console.log(this.alunos.length);
    },(error)=>{
      console.log(error);
    });
  }

  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
  }
  pesquisaAvancada(){
    let data = {
      requisicao: "pesquisaAvancada",
      escola: this.pesquisaEscola,
      turno: this.pesquisaTurno,
      serie: this.pesquisaSerie
    }
    this.provider.requisicaoPost(data, "/alunos.php").subscribe((data)=>{
      this.alunos = []
      this.qtd =0
      for(let c of data['resultado']){
        this.qtd++;
        this.alunos.push(c);
        this.diretora = c.diretora;
        this.escolaridade = c.escolaridadeDiretora;
        this.escola =c.escola;
        this.turno = c.turno;
        this.serie = c.serie;
        this.anoLetivo = c.anoLetivo;
        this.zona= c.areaEscola;
      }
    },(error)=>{
      this.alunos = []
      console.log(error)
    })
  }

  print(componentName) {
    this.printProvider.print(componentName);
  }
  
  async exibir(id, nome){
    const alert = await this.alertController.create({
      cssClass: 'primary',
      header: nome,
      message: "<br>Sobre o aluno, selecione uma opção.",
      buttons: [
        {
          text: 'Visualizar',
          handler: () => {
            this.route.navigate(["/emprimir/"+id+"/"+this.token]);
          }
        },
        {
          text: 'Editar',
          handler: () => {
            this.route.navigate(["/editar/"+id+"/"+this.token]);
          }
        }
      ]
    });

    await alert.present();
  }

  pesquisaAutomatica(){

      let dados ={
        requisicao: "pesquisaAutomatica",
        entrada: this.pesquisa
      }
      this.provider.requisicaoPost(dados,"/alunos.php").subscribe((data)=>{
        this.alunos = [];
        this.qtd =0;
        for(let c of data['resultado']){
          this.qtd++;
          this.alunos.push(c);
        this.diretora = c.diretora;
        this.escolaridade = c.escolaridadeDiretora;
        this.escola =c.escola;
        this.turno = c.turno;
        this.serie = c.serie;
        this.anoLetivo = c.anoLetivo;
        this.zona= c.areaEscola;
        }

      },(error)=>{
        this.alunos = [];
        console.log(error);
      });
  }
}
