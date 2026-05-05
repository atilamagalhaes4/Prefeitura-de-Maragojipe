import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.page.html',
  styleUrls: ['./cadastro-funcionarios.page.scss'],
})
export class CadastroFuncionariosPage implements OnInit {

  alternar: boolean = true;
  pesquisa: string = "";
  fotoPerfil: string = "https://ionicframework.com/docs/img/demos/avatar.svg";
  nome: string  = "";

  constructor(
    private platform: Platform,
    private provider: PostProvider,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    if (this.platform.is("desktop")) {
      this.alternar = true;
    }
  }

  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
  }

  ir(url) {
    this.route.navigate([url]);
  }
  documentosObrigatorios = [
    { label: 'Foto de Perfil 1', preview: '', isPdf: false },
    { label: 'Foto de Perfil 2', preview: '', isPdf: false },
    { label: 'Foto de Perfil 3', preview: '', isPdf: false },
    { label: 'Comprovante de Residência', preview: '', isPdf: false },
    { label: 'Cópia da CTPS', preview: '', isPdf: false },
    { label: 'Cópia da carteira do PIS/PASEP ou NIT', preview: '', isPdf: false },
    { label: 'Cópia da Carteira de Identidade', preview: '', isPdf: false },
    { label: 'Cópia do CPF', preview: '', isPdf: false },
    { label: 'Cópia do Título de Eleitor', preview: '', isPdf: false },
    { label: 'Comprovante da Última Votação', preview: '', isPdf: false },
    { label: 'Cópia da Carteira de Reservista', preview: '', isPdf: false },
    { label: 'Declaração de Bens', preview: '', isPdf: false },
    { label: 'Declaração de Acúmulo de Cargo ou Emprego Público', preview: '', isPdf: false },
    { label: 'Cópia do Extrato da Conta Salário', preview: '', isPdf: false },
    { label: 'Certidão ou Histórico Escolar', preview: '', isPdf: false },
    { label: 'Ficha Cadastral', preview: '', isPdf: false }
  ];
  
  documentosSituacionais = [
    { label: 'Foto da Formação (Magistério/Bacharelado/Licenciatura)', preview: '', isPdf: false },
    { label: 'CNH do Motorista', preview: '', isPdf: false },
    { label: 'CNH do Condutor de Lancha', preview: '', isPdf: false },
    { label: 'Registro do Conselho de Classe (CRM, COREN, CRP etc.)', preview: '', isPdf: false },
    { label: 'Certidão de Nascimento de filhos menores de 14 anos', preview: '', isPdf: false },
    { label: 'Caderneta de Vacinação de filhos menores de 7 anos', preview: '', isPdf: false },
    { label: 'Cópia do CPF dos filhos', preview: '', isPdf: false }
  ];
  
  isZoomOpen = false;
  zoomImage: string | undefined = '';
  
  selecionarArquivo(index: number, isObrigatorio: boolean) {
    const inputId = isObrigatorio ? 'fileInputObrigatorio' + index : 'fileInputSituacional' + index;
    const fileInput = document.getElementById(inputId) as HTMLInputElement;
    fileInput?.click();
  }
  
  handleArquivo(event: any, index: number, isObrigatorio: boolean) {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    const isPdf = file.type === 'application/pdf';
    const targetArray = isObrigatorio ? this.documentosObrigatorios : this.documentosSituacionais;
  
    reader.onload = () => {
      targetArray[index].preview = isPdf ? 'pdf' : reader.result as string;
      targetArray[index].isPdf = isPdf;
    };
  
    if (isPdf) {
      targetArray[index].preview = 'pdf';
      targetArray[index].isPdf = true;
    } else {
      reader.readAsDataURL(file);
    }
  }
  
  abrirZoom(image: string) {
    this.zoomImage = image;
    this.isZoomOpen = true;
  }
  
  fecharZoom() {
    this.isZoomOpen = false;
    this.zoomImage = '';
  }
  
    
  salvarFuncionario() {
    const dados = {
      requisicao: "salvarFuncionario",
      nome: this.nome,
      documentosObrigatorios: this.documentosObrigatorios,
      documentosSituacionais: this.documentosSituacionais
    };
  
    this.provider.salvarFuncionarios(dados, "https://www.maragojipe.ba.gov.br/funcionarios/dados.php").subscribe(
      (data) => {
        alert("enviou");
        console.log("Resposta do servidor:", data);
      },
      (error) => {
        alert("enviou");
        console.error("Erro ao pegar notícias:", error);
      }
    );
  }

}
