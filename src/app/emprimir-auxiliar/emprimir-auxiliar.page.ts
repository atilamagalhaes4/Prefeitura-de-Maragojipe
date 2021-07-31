import { PrintProvider } from './../../assets/providers/print-provider';
import { Platform, AlertController } from '@ionic/angular';
import { PostProvider } from '../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprimir-auxiliar',
  templateUrl: './emprimir-auxiliar.page.html',
  styleUrls: ['./emprimir-auxiliar.page.scss'],
})
export class EmprimirAuxiliarPage implements OnInit {

 
  verificar: boolean = false;
  alternar: boolean = true;
  pesquisa: string = "";
  token: string = "";
  auxiliares: any = []
  alunos: any = []
  
  id: string = "";
  numeroCasa: string = ""; //
  enderecoEscola: string = "";
  endereco: string = ""; //
  cidade: string = ""; //
  materia: string = "";
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
  observacoes: string = "Alto do Cruzeiro. Deques e torres de observação.  Porto do Caijá Pontos de interesse.  Ilha dos Franceses. Ilhas.  Ponta do Souza / Praia do Pina. Praias.  Matriz de Sao Bartolomeu. Igrejas e catedrais.  Cachoeira da Gruta do Sol.";

  ngOnInit() {
  }

  inicio(){
    this.route.navigate(["/dashboard/"+this.token]);
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
        this.provider.requisicaoPost(dados2,"/auxiliar.php").subscribe((data)=>{
          for(let c of data['resultado']){
            this.numeroCasa= c.numeroCasa,
            this.enderecoEscola= c.enderecoEscola,
            this.endereco= c.endereco,
            this.cidade= c.cidade,
            this.materia= c.materia,
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
            this.observacoes = c.observacoes
          }
        },(error)=>{
          console.log(error)
        });
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

  print(componentName) {
    this.printProvider.print(componentName);
  }
  voltar(){
      this.route.navigate(["/auxiliares/"+this.token]);
  }

}
