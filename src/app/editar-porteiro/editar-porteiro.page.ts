import { PrintProvider } from './../../assets/providers/print-provider';
import { Platform, AlertController } from '@ionic/angular';
import { PostProvider } from './../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-porteiro',
  templateUrl: './editar-porteiro.page.html',
  styleUrls: ['./editar-porteiro.page.scss'],
})
export class EditarPorteiroPage implements OnInit {

  verificar: boolean = false;
  alternar: boolean = true;
  pesquisa: string = "";
  token: string = "";
  alunos: any = []
  
  id: string = "";
  numeroCasa: string = ""; //
  enderecoEscola: string = "";
  endereco: string = ""; //
  cidade: string = ""; //
  admissao: string = "";
  diretorResponsavel: string = "";
  cargaHoraria: string = "";
  situacao: string = "";
  dataAjustadaAdmissao: string = ""
  zonaEscolar: string = "";
  escolaDisable: boolean = false;
  distritoEscolar: string = "";
  dataNascimento: string = "";
  nomeEscola: string = "";
  escolaridade: string = "";
  nome: string = "";
  turno: string = "";
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

  voltar(){
    this.route.navigate(["/porteiros/"+this.token]);
  }
  editar(){
    
    let dados = {
      requisicao: "editarPorteiro",
      id:this.id,
      numeroCasa: this.numeroCasa,
      enderecoEscola: this.enderecoEscola,
      endereco: this.endereco,
      cidade: this.cidade,
      admissao: this.dataAjustadaAdmissao,
      diretorResponsavel: this.diretorResponsavel,
      cargaHoraria: this.cargaHoraria,
      situacao: this.situacao,
      zonaEscolar: this.zonaEscolar,
      distritoEscolar: this.distritoEscolar,
      dataNascimento: this.dataNascimentoAjustado,
      nomeEscola: this.nomeEscola,
      escolaridade: this.escolaridade,
      nome: this.nome,
      turno: this.turno
    }
    
    this.provider.requisicaoPost(dados, "/porteiro.php").subscribe((data)=>{
      console.log(data);
      if(data['situacao'] == true){
        this.presentAlert(data['mensagem']);
        this.route.navigate(["/porteiros/"+this.token]);
      }
      else{
        this.presentAlert(data['mensagem']);
      }
    },(error)=>{
      console.log(error);
    })
  }
  ngOnInit() {
  }

  teste2(){
    var ponto =".";
    if(this.dataNascimento.length ==2)  this.dataNascimento = this.dataNascimento + ponto;

      else if(this.dataNascimento.length ==5) this.dataNascimento = this.dataNascimento + ponto;
    
  }
  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
  }

  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  constructor(
    private actRoute: ActivatedRoute,
    private provider: PostProvider,
    private platform: Platform,
    private route: Router,
    private alertController: AlertController,
    private printProvider: PrintProvider
  ) { }

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
        this.provider.requisicaoPost(dados2,"/porteiro.php").subscribe((data)=>{
          for(let c of data['resultado']){
            this.numeroCasa= c.numeroCasa,
            this.enderecoEscola= c.enderecoEscola,
            this.endereco= c.endereco,
            this.cidade= c.cidade,
            this.admissao= c.admissao,
            this.diretorResponsavel= c.diretorResponsavel,
            this.cargaHoraria= c.cargaHoraria,
            this.situacao= c.situacao,
            this.zonaEscolar= c.zonaEscolar,
            this.distritoEscolar= c.distritoEscolar,
            this.dataNascimento= c.dataNascimento,
            this.nomeEscola= c.nomeEscola,
            this.escolaridade= c.escolaridade,
            this.nome= c.nome,
            this.turno= c.turno
          }
        },(error)=>{
          console.log(error)
        });
        if(data['dados'][0].categoria == "escola"){ // se for escola
          this.enderecoEscola = data['dados'][0].endereco;
          this.nomeEscola =  data['dados'][0].login;
          this.zonaEscolar =  data['dados'][0].area;
          this.distritoEscolar =  data['dados'][0].distrito;
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


  ionViewWillEnter(){
    this.pesquisa =="";
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs, data.id);
    });    
      this.alternar = true;
  }

  teste(){
    
    var ponto =".";
    if(this.admissao.length ==2)  this.admissao = this.admissao + ponto;

      else if(this.admissao.length ==5) this.admissao = this.admissao + ponto;
    
  }
}
