import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-onde-comer',
  templateUrl: './onde-comer.page.html',
  styleUrls: ['./onde-comer.page.scss'],
})
export class OndeComerPage implements OnInit {


  alternar: boolean =true;
  pesquisa: String = "";
  todos: any = [ { nome1: "", rua1: "", contato1: "", nome2: "", rua2: "", contato2: "", },    { nome1: "", rua1: "", contato1: "", nome2: "", rua2: "", contato2: "", },    { nome1: "", rua1: "", contato1: "", nome2: "", rua2: "", contato2: "", },    { nome1: "", rua1: "", contato1: "", nome2: "", rua2: "", contato2: "", } ]

  ponta: any = [
    {
      nome: "Barraca do Nal",
      rua: "Praia do Pina",
      contato: "(75) 99962-6517",
    }
  ]
  centro: any = [
    {
      nome: "Beto's Bar e Pizzaria",
      rua: "Praça Conselheiro Antônio Rebouças, Centro",
      contato: "(75) 3526-1964",
    },
    {
      nome: "Rei da Feijoada",
      rua: "Rua Dr. Maurício Rebouças, Centro",
      contato: "(75) 3526-1887",
    },
    {
      nome: "Restaurante Juliana",
      rua: "Rua Maestro José Pereira Rebouças, 10, Centro",
      contato: "(75) 3526- 1887",
    },
  ]

  concatenar(){
    var maior = 0;

    if(maior<this.centro.length) maior = this.centro.length;
    if(maior<this.ponta.length) maior = this.ponta.length;
    
    for(var i = 0; i<maior;i++){
      if(this.centro[i].nome!="")this.todos[i].nome1 = this.centro[i].nome;
      if(this.centro[i].rua!="")this.todos[i].rua1 = this.centro[i].rua;
      if(this.centro[i].contato!="")this.todos[i].contato1 = this.centro[i].contato;
      if(this.ponta[i].nome!="")this.todos[i].nome2 = this.ponta[i].nome;
      if(this.ponta[i].rua!="")this.todos[i].rua2 = this.ponta[i].rua;
      if(this.ponta[i].contato!="")this.todos[i].contato2 = this.ponta[i].contato;
    }
  }
  constructor(
    private platform: Platform,
    private route: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
    this.concatenar();
  }

  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
}
