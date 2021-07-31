import { PostProvider } from './../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adcionar-porteiro',
  templateUrl: './adcionar-porteiro.page.html',
  styleUrls: ['./adcionar-porteiro.page.scss'],
})
export class AdcionarPorteiroPage implements OnInit {

 
  alternar: boolean = true;
  verificar: boolean = true;
  token: string = "";

  id: string = "";
  numeroCasa: string = ""; //
  enderecoEscola: string = "";
  endereco: string = ""; //
  cidade: string = ""; //
  admissao: string = "";
  diretorResponsavel: string = "";
  cargaHoraria: string = "";
  situacao: string = "";
  zonaEscolar: string = "";
  distritoEscolar: string = "";
  dataNascimento: string = "";
  nomeEscola: string = "";
  escolaridade: string = "";
  nome: string = "";
  turno: string = "";
  dataNascimentoAjustado: string = "";
  escolaDisable: boolean = false;
  areaEscola: string = "";
  distrito: string = "";
  enderecoEscolaDisable: boolean = false;
  areaDisable: boolean = false;
  distritoDisable: boolean = false;
  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private provider: PostProvider,
    private alertController: AlertController
  ) { }

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

  ngOnInit() {
  }
 
  ionViewWillEnter(){
    this.actRoute.params.subscribe((data) => {
      this.validar(data.obs);
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
      }else{
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

  voltar(){
    this.route.navigate(["/porteiros/"+this.token]);
  }
  
  dataAjustada = "";
  matricular(){
    console.log(this.dataAjustada)
    let dados = {
        requisicao: "matricularPorteiros",
        numeroCasa: this.numeroCasa,
        enderecoEscola: this.enderecoEscola,
        endereco: this.endereco,
        cidade: this.cidade,
        admissao: this.dataAjustada,
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
//        this.presentAlert(data['mensagem']);
  //      this.route.navigate(["/porteiros/"+this.token]);
  this.presentAlertConfirm("Dados salvos com sucesso.<br>Escolha uma opção.", +data['id'][0])
      }
      else{
        this.presentAlert(data['mensagem']);
      }
    },(error)=>{
      console.log(error);
    })
  }
  teste(){
    var dia, mes, ano;
    ano = this.admissao.substring(0,4);
    mes = this.admissao.substring(5,7)
    dia = this.admissao.substring(8,10)
    this.dataAjustada = dia.concat("\\\\")+mes.concat("\\\\")+ano;
  }
  teste2(){
    var dia, mes, ano;
    ano = this.dataNascimento.substring(0,4);
    mes = this.dataNascimento.substring(5,7)
    dia = this.dataNascimento.substring(8,10)
    this.dataNascimentoAjustado = dia.concat("\\\\")+mes.concat("\\\\")+ano;
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
  
  async presentAlertConfirm(mensagem, id) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Voltar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.route.navigate(["/dashboard/"+this.token]);
          }
        },
        {
          text: 'Imprimir',
          handler: () => {
            this.route.navigate(["/emprimir-porteiro/"+this.token+"/"+id]);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
