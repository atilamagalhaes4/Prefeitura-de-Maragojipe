import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-telefones-uteis',
  templateUrl: './telefones-uteis.page.html',
  styleUrls: ['./telefones-uteis.page.scss'],
})
export class TelefonesUteisPage implements OnInit {

  alternar: boolean= false;
  pesquisa: String = "";
  constructor(
    private platform: Platform,
    private route: Router
  ) { }
  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
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
}
