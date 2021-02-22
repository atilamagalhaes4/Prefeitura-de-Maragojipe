import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-o-municipio',
  templateUrl: './o-municipio.page.html',
  styleUrls: ['./o-municipio.page.scss'],
})
export class OMunicipioPage implements OnInit {

  alternar: boolean = false;
  pesquisa: String = "";
  constructor(
    private platform: Platform,
    private route: Router
  ) { }

  ngOnInit() {
  }
  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
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
