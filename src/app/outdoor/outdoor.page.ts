import { PostProvider } from './../../assets/providers/post-provider';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.page.html',
  styleUrls: ['./outdoor.page.scss'],
})
export class OutdoorPage implements OnInit {

  modelId: string = "";
  modalTitle: string = "";
  id: string = "";
  nome: string = "";
  cpf: string = "";
  distrito: string = "";
  email: string = "";
  lido: string = "";
  comentario: string = "";
  escolha1: string = "";
  escolha2: string = "";
  escolha3: string = "";


  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private provider: PostProvider
  ) { }

  ngOnInit() {
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.nome = this.navParams.data.nome;
    this.cpf = this.navParams.data.cpf;
    this.distrito = this.navParams.data.distrito;
    this.email = this.navParams.data.email;
    this.lido = this.navParams.data.lido;
    this.comentario = this.navParams.data.comentario;
    this.escolha1 = this.navParams.data.escolha1;
    this.escolha2 = this.navParams.data.escolha2;
    this.escolha3 = this.navParams.data.escolha3;   
    this.id = this.navParams.data.id;
  }

  abrirSite(link){
    window.open(link);
  }
  async closeModal() {
    const onClosedData: string = "Retornei isso aqui";
    this.Lido(this.id);
    await this.modalController.dismiss(onClosedData);
  }

  Lido(id){
    let dados ={
      requisicao: "situacaoLeitura",
      id: id,
      dado: "true"
    }
    this.provider.requisicaoPost(dados,"/ppa.php").subscribe((data)=>{
      console.log("Marcado como lido",data);
    },(error)=>{
      console.log(error)
    });
  }
}
