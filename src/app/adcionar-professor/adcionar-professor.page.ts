import { PostProvider } from './../../assets/providers/post-provider';
import { Platform, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adcionar-professor',
  templateUrl: './adcionar-professor.page.html',
  styleUrls: ['./adcionar-professor.page.scss'],
})
export class AdcionarProfessorPage implements OnInit {

  alternar: boolean = true;
  verificar: boolean = true;
  token: string = "";

  escolaEnsino = "";
  diretorDele = "";
  enderecoEscolaAtua = "";
  zonaEscolaAtua = "";
  distritoEscolaAtua = "";
  nome = "";
  dataNascimento = "";
  formacao = "";
  disciplinaAtuacao: string = "";
  condicao = "";
  materia1 = "";
  turnoEscolaNormal = "";
  cargaHoraria = "";
  observacoes: string = "";
  QualEscolaHoraExtra = "";
  cargaHorariaAdcional = "";
  turnoEscolaExtra = "";
  diretorSegundaEscola = "";
  materia2 = "";
  outraEscola: string = "";
  escolaDisable: boolean = false;
  distritoEscolaExtra = "";
  enderecoEscolaHoraExtra = "";
  zonaEscolaExtra = "";
  dataNascimentoAjustado: string = "";
  enderecoEscolaDisable:boolean  = false;
  areaDisable:boolean  = false;
  distritoDisable:boolean  = false;
  pim2 ="Sim"
  talvez2 = false;
  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private provider: PostProvider,
    private alertController: AlertController
  ) { }

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
    { "nome": "Sementes do Paraguaçu"},
    { "nome": "São Roque - Boa Vista"},
    { "nome": "Senhor do Bonfim - Brinco"},
    { "nome": "Silvio Vieira de Melo"},
    { "nome": "Outros"},
    { "nome": "Não se aplica"},
  ]
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
    this.dataNascimentoAjustado == dia.concat("\\\\")+mes.concat("\\\\")+ano;
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

  voltar(){
    this.route.navigate(["/professores/"+this.token]);
  }
  
  matricular(){
    let dados;
    if(this.QualEscolaHoraExtra =="Outros"){
      dados = {
        requisicao: "matricularProfessores",
        escolaEnsino: this.escolaEnsino,
        diretorDele: this.diretorDele,
        enderecoEscolaAtua: this.enderecoEscolaAtua,
        zonaEscolaAtua: this.zonaEscolaAtua,
        enderecoEscolaHoraExtra: this.enderecoEscolaHoraExtra,
        zonaEscolaExtra: this.zonaEscolaExtra,
        distritoEscolaExtra: this.distritoEscolaExtra,
        materia2: this.materia2,
        disciplinaAtuacao: this.disciplinaAtuacao,
        diretorSegundaEscola: this.diretorSegundaEscola,
        turnoEscolaExtra: this.turnoEscolaExtra,
        cargaHorariaAdcional: this.cargaHorariaAdcional,
        QualEscolaHoraExtra: this.outraEscola,
        cargaHoraria: this.cargaHoraria,
        turnoEscolaNormal: this.turnoEscolaNormal,
        materia1: this.materia1,
        condicao: this.condicao,
        formacao: this.formacao,
        dataNascimento: this.dataNascimentoAjustado,
        nome: this.nome,
        observacoes: this.observacoes,
        distritoEscolaAtua: this.distritoEscolaAtua,
      }

    }else{
      dados = {
        requisicao: "matricularProfessores",
        escolaEnsino: this.escolaEnsino,
        diretorDele: this.diretorDele,
        enderecoEscolaAtua: this.enderecoEscolaAtua,
        zonaEscolaAtua: this.zonaEscolaAtua,
        enderecoEscolaHoraExtra: this.enderecoEscolaHoraExtra,
        zonaEscolaExtra: this.zonaEscolaExtra,
        distritoEscolaExtra: this.distritoEscolaExtra,
        materia2: this.materia2,
        disciplinaAtuacao: this.disciplinaAtuacao,
        diretorSegundaEscola: this.diretorSegundaEscola,
        turnoEscolaExtra: this.turnoEscolaExtra,
        cargaHorariaAdcional: this.cargaHorariaAdcional,
        QualEscolaHoraExtra: this.QualEscolaHoraExtra,
        cargaHoraria: this.cargaHoraria,
        turnoEscolaNormal: this.turnoEscolaNormal,
        materia1: this.materia1,
        condicao: this.condicao,
        formacao: this.formacao,
        dataNascimento: this.dataNascimentoAjustado,
        nome: this.nome,
        distritoEscolaAtua: this.distritoEscolaAtua,
      }
    }
      console.log(dados);

      this.provider.requisicaoPost(dados, "/professores.php").subscribe((data)=>{
      if(data['situacao'] == true){
//        this.presentAlert(data['mensagem']);
  //      this.route.navigate(["/professores/"+this.token]);
        this.presentAlertConfirm("Dados salvos com sucesso.<br>Escolha uma opção.", +data['id'][0])
      }
      else{
        this.presentAlert(data['mensagem']);
      }
    },(error)=>{
      console.log(error);
    })
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
            this.route.navigate(["/emprimir-professor/"+this.token+"/"+id]);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
