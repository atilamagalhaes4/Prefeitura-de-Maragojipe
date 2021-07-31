import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Platform } from '@ionic/angular';
import { Livros } from 'src/assets/livros';
@Component({
  selector: 'app-ver-livros',
  templateUrl: './ver-livros.page.html',
  styleUrls: ['./ver-livros.page.scss'],
})
export class VerLivrosPage implements OnInit {
  
  pesquisa: string = "";
  alternar: boolean = true;
  opcao: string = "";
  dados: any = [];
  escolaridade: string = "";
  posicao: string = "";
  livros: any = []

  infantil = [{ nome: "Creche" }, { nome: "Pré-Escola" } ];
  fundamental1 = [{ nome: "1º ano" }, { nome: "2º ano" }, { nome: "3º ano" }, { nome: "4º ano" }, { nome: "5º ano" } ];
  fundamental2 = [{ nome: "6º ano" }, { nome: "7º ano" }, { nome: "8º ano" }, { nome: "9º ano" } ];
  EJA = [{ nome: "5º / 6º Serie" }, { nome: "7º / 8º Serie" } ];
  AEE = [ { nome: "AEE"} ];

  constructor(
    private route: Router,
    private platform: Platform,
    private actRoute: ActivatedRoute,
    private biblioteca: Livros
  ) { }

  ngOnInit() {
  }

  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
  ionViewWillEnter(){

    this.actRoute.params.subscribe( (data) => {
      this.opcao = data.opc;

      if(data.opc  == "fundamental-1"){
        this.dados = this.fundamental1;
      }else if(data.opc  == "infantil"){
        this.dados = this.infantil;
      }else if(data.opc  == "fundamental-2"){
        this.dados = this.fundamental2;
      }else if(data.opc  == "EJA"){
        this.dados = this.EJA;
      }else {
        this.dados = this.AEE;
      }
    });
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    if(this.platform.is("desktop")){
      this.alternar = true;
    }

  }

  alterarEscolaridade(){
    this.livros = [];
    this.escolaridade = this.posicao;

    if(this.posicao == 'Creche'){
      this.livros = this.biblioteca.creche;
    }
    else if(this.posicao == "Pré-Escola"){
      this.livros = this.biblioteca.pre;
    }
    else if(this.posicao == "1º ano"){
      this.livros = this.biblioteca.ano1;
    }
    else if(this.posicao == "2º ano"){
      this.livros = this.biblioteca.ano2;
    }
    else if(this.posicao == "3º ano"){
      this.livros = this.biblioteca.ano3;
    }
    else if(this.posicao == "4º ano"){
      this.livros = this.biblioteca.ano4;
    }
    else if(this.posicao == "5º ano"){
      this.livros = this.biblioteca.ano5;
    }
    else if(this.posicao == "6º ano"){
      this.livros = this.biblioteca.ano6;
    }
    else if(this.posicao == "7º ano"){
      this.livros = this.biblioteca.ano7;
    }
    else if(this.posicao == "8º ano"){
      this.livros = this.biblioteca.ano8;
    }
    else if(this.posicao == "9º ano"){
      this.livros = this.biblioteca.ano9;
    }
    else if(this.posicao == "5º / 6º Serie"){
      this.livros = this.biblioteca.EJA1;
    }
    else if(this.posicao == "7º / 8º Serie"){
      this.livros = this.biblioteca.EJA2;
    }
    else if(this.posicao == "AEE"){
      this.livros = this.biblioteca.AEE;
    }

  }
}
