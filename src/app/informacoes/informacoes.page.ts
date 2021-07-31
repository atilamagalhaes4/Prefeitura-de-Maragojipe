import { PrintProvider } from './../../assets/providers/print-provider';
import { PostProvider } from '../../assets/providers/post-provider';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private route: Router,
    private provider: PostProvider,
    private printProvider: PrintProvider
  ) { }

  token: string = "";
  escola: string = "";
  verificar: boolean = false;
  atila = [];
  escolaDisable: boolean = false;

  dados =[
    {
      serie:"",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total:0
    },
    {
      serie:"",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total:0
    },
    {
      serie:"",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total:0
    },
    {
      serie:"",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total:0
    },
    {
      serie:"",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total:0
    },
    {
      serie:"",
      femininoMatutino: 0,
      femininoVespertino: 0,
      femininoNoturno: 0,
      femininoIntegral: 0,
      masculinoIntegral: 0,
      masculinoMatutino: 0,
      masculinoVespertino: 0,
      masculinoNoturno: 0,
      total:0
    },
  ]
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
    });
    
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
      }
      else{
        if(data['dados'][0].categoria == "escola"){ // se for escola
        //  this.enderecoEscola = data['dados'][0].endereco;
          this.escola =  data['dados'][0].login;
        //  this.areaEscola =  data['dados'][0].area;
  //        this.distrito =  data['dados'][0].distrito;
    //      this.enderecoEscolaDisable = true;
          this.escolaDisable = true;
      //    this.areaDisable = true;
        //  this.distritoDisable = true; 
        this.pesquisar();
        }
      }
    },(error)=>{
      this.route.navigate(["/login"]);
      console.log(error)
    })
  }

  
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

  pesquisar(){
    this.atila = []
    for(var i = 0; i<this.dados.length;i++){
      this.dados[i].serie = "";
      this.dados[i].femininoMatutino= 0;
      this.dados[i].femininoVespertino= 0;
      this.dados[i].femininoNoturno= 0;
      this.dados[i].masculinoMatutino= 0;
      this.dados[i].masculinoVespertino= 0;
      this.dados[i].masculinoNoturno= 0;
      this.dados[i].total= 0;
    }

    let dados = {
      requisicao: "serieSexo",
      escola: this.escola
    }
    this.provider.requisicaoPost(dados,"/alunos.php").subscribe((data)=>{
      for(let c of data["resultado"]){
        this.atila.push(c);
      }
    var n= false;

    for(var i =0;i<this.atila.length;i++){
      for(var j = 0;j<6;j++){
        if(this.dados[j].serie == this.atila[i].serie){
          n = true; // se ja tiver no vetor eu paro
          break;
        }
      }
        if(n == false){// se n tiver eu pego o que estiver com espaco vazio
          for(var j = 0;j<6;j++){
            if(this.dados[j].serie == ""){
              this.dados[j].serie = this.atila[i].serie;
              break;
            }
          }
        }
        n = false;
    }
    for(var j =0; j<5;j++){
      for(var i =0;i<this.atila.length;i++){
        if(this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo =="Feminino" && this.atila[i].turno =="matutino" ){
          this.dados[j].femininoMatutino++;
          this.dados[j].total++;
        }
        if(this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo =="Feminino" && this.atila[i].turno =="vespertino" ){
          this.dados[j].femininoVespertino++;
          this.dados[j].total++;
        }
        if(this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo =="Feminino" && this.atila[i].turno =="noturno" ){
          this.dados[j].femininoNoturno++;
          this.dados[j].total++;
        }
        if(this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo =="Masculino" && this.atila[i].turno =="matutino" ){
          this.dados[j].masculinoMatutino++;
          this.dados[j].total++;
        }
        if(this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo =="Masculino" && this.atila[i].turno =="vespertino" ){
          this.dados[j].masculinoVespertino++;
          this.dados[j].total++;
        }
        if(this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo =="Masculino" && this.atila[i].turno =="noturno" ){
          this.dados[j].masculinoNoturno++;
          this.dados[j].total++;
        }
        if(this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo =="Masculino" && this.atila[i].turno =="integral" ){
          this.dados[j].femininoIntegral++;
          this.dados[j].total++;
        }
        if(this.atila[i].serie == this.dados[j].serie && this.atila[i].sexo =="Feminino" && this.atila[i].turno =="integral" ){
          this.dados[j].masculinoIntegral++;
          this.dados[j].total++;
        }
      }
    }
    this.atila = [];
    for(let c of this.dados){
      if(c.serie !=""){
        this.atila.push(c);
      } 
    }
    console.log(this.dados)
    },(error)=>{
      console.log(error);
    })
  }

  print(componentName) {
    this.printProvider.print(componentName);
  }
  voltar(){
      this.route.navigate(["/dashboard/"+this.token]);
  }
  
  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
  }

}
