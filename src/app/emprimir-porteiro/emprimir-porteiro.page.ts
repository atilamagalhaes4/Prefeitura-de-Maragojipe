import { PrintProvider } from './../../assets/providers/print-provider';
import { Platform, AlertController } from '@ionic/angular';
import { PostProvider } from './../../assets/providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-emprimir-porteiro',
  templateUrl: './emprimir-porteiro.page.html',
  styleUrls: ['./emprimir-porteiro.page.scss'],
})
export class EmprimirPorteiroPage implements OnInit {

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;


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

  downloadImage(){
    //npm i html2canvas
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      var popup=window.open();
      popup.document.write ('<img src =' + canvas.toDataURL() + '>');
      popup.document.close ();
      popup.focus ();
      setTimeout(function (){
        popup.print();
        popup.close ();
      }, 1000);
    })
      /*
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = this.nomeAluno+'.png';
      this.downloadLink.nativeElement.click();
    });*/
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
      this.route.navigate(["/porteiros/"+this.token]);
  }

}
