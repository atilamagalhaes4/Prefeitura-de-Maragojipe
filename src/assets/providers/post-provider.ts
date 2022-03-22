//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHandler, HttpHeaders, HttpRequest,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class PostProvider{
  //server: string = "http://localhost/prefeitura.api";
  //server: string = "http://39ab824eada4.ngrok.io/prefeitura.api";
  server: string = "https://www.maragojipe.ba.gov.br/assets/api";
  constructor(
      private http : HttpClient
    ){  } 
    
    acessarBanco(dados: any, api: string){
      return new Promise((resolve, reject) =>{
        let url = this.server + api;
        this.http.post(url,dados)
        .subscribe((result: any)=>{
          resolve(result);
},
        (error) =>{
//          reject(error.json);
});
      });
    }

    requisicaoPost(dados: any, api: string){

        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          };
            let url = this.server + api ;
           return this.http.post(url, JSON.stringify(dados), httpOptions)
           .map(res => res);
  }




requisicaoGet(dados: any, api: string){

  const opcoes = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      body:dados
    };
      let url = this.server + api ;
     return this.http.get(url,opcoes)
     .map(res => res);
}
  
}