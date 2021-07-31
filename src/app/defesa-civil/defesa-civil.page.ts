import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-defesa-civil',
  templateUrl: './defesa-civil.page.html',
  styleUrls: ['./defesa-civil.page.scss'],
})
export class DefesaCivilPage implements OnInit {

  constructor(
    private platform: Platform,
    private route: Router
  ) { }

  place: string = "";
  type: string = "";
  icon: string = "";
  temperatura: string = "";


  // outros
  pesquisa: string = "";
  alternar : boolean = true;
  
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
