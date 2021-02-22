import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-onde-ficar',
  templateUrl: './onde-ficar.page.html',
  styleUrls: ['./onde-ficar.page.scss'],
})
export class OndeFicarPage implements OnInit {

  alternar: boolean =true;
  pesquisa: String = "";
  centro: any = [
    {
      nome: "Pousada da Carminha",
      rua: "Rua Fernando Suerdieck,  Centro",
      contato: "(75) 3526-1203",
    },
    {
      nome: "Hotel Maragojipe",
      rua: "Rua XV de novembro, 11, Areal",
      contato: "(75) 3526-1056",
    },
    {
      nome: "Pousada Oxumaré",
      rua: "Rua Cícero Borges, 1, Centro",
      contato: "(75) 3526- 1104",
    }
  ]

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
  }

  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
}
