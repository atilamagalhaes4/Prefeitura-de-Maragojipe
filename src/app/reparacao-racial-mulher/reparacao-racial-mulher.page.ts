import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-reparacao-racial-mulher',
  templateUrl: './reparacao-racial-mulher.page.html',
  styleUrls: ['./reparacao-racial-mulher.page.scss'],
})
export class ReparacaoRacialMulherPage implements OnInit {

  alternar: boolean = true;
  pesquisa: string = "";

  constructor(
    private platform: Platform,
    private route: Router
  ) { }

  ngOnInit() {
  }
  
  ir(url) {
    this.route.navigate([url]);
  }
  slideOptsOne = {
    autoplay: true
  }
  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
  }

  ionViewWillEnter() {
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    if (this.platform.is("desktop")) {
      this.alternar = true;
    }
  }

}
