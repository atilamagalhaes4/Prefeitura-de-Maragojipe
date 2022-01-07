import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';

@Component({
  selector: 'app-meio-ambiente',
  templateUrl: './meio-ambiente.page.html',
  styleUrls: ['./meio-ambiente.page.scss'],
})
export class MeioAmbientePage implements OnInit {


  alternar: boolean= false;
  pesquisa: String = "";
  visualizarPortarias: boolean = false;
  visualizarFormularios: boolean = false;
  arrayPortaria: any = [];
  arrayFormulario: any = [];

  constructor(
    private platform: Platform,
    private route: Router,
    private provider: PostProvider
  ) { }
  pesquisarNoticias(){
    this.route.navigate(["/mais-noticias/"+this.pesquisa]);
  }
  ngOnInit() {
  }

  opcoesViewPortarias(){
    if(this.visualizarPortarias == true)
      this.visualizarPortarias = false;
    else this.visualizarPortarias = true;
  }

  opcoesViewFormularios(){
    if(this.visualizarFormularios == true)
      this.visualizarFormularios = false;
    else this.visualizarFormularios = true;
  }

  ionViewWillEnter(){
    let dados ={
      requisicao: "pesquisarCoisasAmbiente"
    }
    this.provider.requisicaoPost(dados, "/meio-ambiente.php").subscribe((data)=>{
      console.log(data);
      for(let c of data['resultado']){
        if(c.categoria == "formulario"){
          this.arrayFormulario.push(c);
        }
        if(c.categoria == "portaria"){
          this.arrayPortaria.push(c);
        }
      }
    },(error)=>{
      console.log(error)
    })

    if(this.platform.is("desktop")){
      this.alternar = true;
    }
    if(this.platform.is("mobile")){
      this.alternar = false;
    }
  }

}
