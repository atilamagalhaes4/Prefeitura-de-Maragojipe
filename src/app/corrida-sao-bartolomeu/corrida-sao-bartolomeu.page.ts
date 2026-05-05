import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { PrintProvider } from 'src/assets/providers/print-provider';
import { PostProvider } from '../../assets/providers/post-provider';



@Component({
  selector: 'app-corrida-sao-bartolomeu',
  templateUrl: './corrida-sao-bartolomeu.page.html',
  styleUrls: ['./corrida-sao-bartolomeu.page.scss'],
})
export class CorridaSaoBartolomeuPage implements OnInit {

  candidato: any = [];

  numeroCorredor: string = "";

  id: string = "";
  nome: string = "";
  dataNascimento: string = "";
  cpf: string = "";
  sexo: string = "";
  cidade: string = "";
  equipe: string = "";
  telefone: string = "";
  categoria: string = "Ampla concorrência";
  subCategoria: string = "";
  distancia: string = "";
  maiorIdade: boolean = true;
  cep: string = "";
  pesquisa: string = "";
  alternar: boolean = true;
  desativarOpcoes: boolean = false;
  termo: boolean = false;
  cpf2: string = "";

  aux_nome: string = "";
  aux_cpf: string = "";
  aux_dataNascimento: string = "";
  aux_sexo: string = "";
  aux_categoria: string = "";
  aux_subCategoria: string = "";
  aux_distancia: string = "";
  aux_equipe: string = "";
  aux_celular: string = "";
  aux_dataInscricao: string = "";

  constructor(
    private route: Router,
    private platform: Platform,
    private provider: PostProvider,
    private alertController: AlertController,
    private printProvider: PrintProvider,
    private loadingController: LoadingController
  ) { }

  AlterarData(data: string) {
    var aux = "";
    aux = aux + data[8];
    aux = aux + data[9];
    aux = aux + "/";
    aux = aux + data[5];
    aux = aux + data[6];
    aux = aux + "/";
    aux = aux + data[0];
    aux = aux + data[1];
    aux = aux + data[2];
    aux = aux + data[3];
    aux = aux + " ás ";
    aux = aux + data[10];
    aux = aux + data[11];
    aux = aux + data[12];
    aux = aux + data[13];
    aux = aux + data[14];
    aux = aux + data[15];
    aux = aux + data[16];
    aux = aux + data[17];
    aux = aux + data[18];
    return aux;
  }

  print(componentName) {
    this.printProvider.print(componentName);
  }


  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
  }

  ir(url) {
    this.route.navigate([url]);
  }

  ionViewWillEnter() {
    if (this.platform.is("mobile")) {
      this.alternar = false;
    }
    if (this.platform.is("desktop")) {
      this.alternar = true;
    }
    /*    this.presentAlert(`Inscrições encerradas<br>
          Limite alçando.<br>
          Obrigado a todos participantes.`)*/
  }

  ajustarDataNascimento() {
    if (this.dataNascimento.length === 2 || this.dataNascimento.length === 5) {
      this.dataNascimento += "/";
    } else if (this.dataNascimento.length === 10) {
      const partes = this.dataNascimento.split("/");
      const ano = parseInt(partes[2], 10);

      const anoAtual = new Date().getFullYear();
      const idade = anoAtual - ano;

      if (idade >= 18) {
        console.log("Maior ou igual a 18 anos (ano apenas):", idade);
        // this.ehMaiorDeIdade = true;
        this.maiorIdade = true;
      } else {
        console.log("Menor de 18 anos (ano apenas):", idade);
        // this.ehMaiorDeIdade = false;
        this.maiorIdade = false;
      }
      console.log(this.maiorIdade)
    }
    console.log(this.dataNascimento)
  }


  verificarCEP() {

    if (this.cep.length == 8)
      this.provider.GET("https://viacep.com.br/ws/", this.cep + "/json/").subscribe(
        async (data) => {
          console.log(data['localidade']);
          this.cidade = data['localidade'];
        },
        async (error) => {
          console.log("Tente novamente mais tarde.");
          console.error(error);
        }
      );
  }


  adaptarCpf() {
    if (this.cpf.length == 3) {
      this.cpf = this.cpf + '.'; // Adiciona ponto após 3 números
    } else if (this.cpf.length == 7) {
      this.cpf = this.cpf + '.'; // Adiciona ponto após 7 números
    } else if (this.cpf.length == 11) {
      this.cpf = this.cpf + '-'; // Adiciona traço após 11 números
    }
  }
  adaptarCpf2() {
    if (this.cpf2.length == 3) {
      this.cpf2 = this.cpf2 + '.'; // Adiciona ponto após 3 números
    } else if (this.cpf2.length == 7) {
      this.cpf2 = this.cpf2 + '.'; // Adiciona ponto após 7 números
    } else if (this.cpf2.length == 11) {
      this.cpf2 = this.cpf2 + '-'; // Adiciona traço após 11 números
    }
  }
  // Função de validação para verificar se o CPF está no formato correto
  validarCpf(cpf: string): boolean {
    // Expressão regular para verificar o formato XXX.XXX.XXX-XX
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    // Testa se o CPF está no formato correto
    return regex.test(cpf);
  }

  adaptarTelefone() {
    if (this.telefone == "")
      this.telefone = "(" + this.telefone;
    else if (this.telefone.length == 3)
      this.telefone = this.telefone + ") ";
    else if (this.telefone.length == 6)
      this.telefone = this.telefone + " ";
    else if (this.telefone.length == 11)
      this.telefone = this.telefone + "-";
  }

  validarTelefone(telefone: string): boolean {
    // Formato: (XX) 9 XXXX-XXXX
    const regex = /^\(\d{2}\)\s9\s\d{4}-\d{4}$/;
    return regex.test(telefone);
  }

  adaptarCategoria() {

    if (this.categoria == "PCD cadeira handbike" || this.categoria == "PCD cadeira tradicional") {
      this.desativarOpcoes = true; // no anteior
      this.subCategoria = "Geral";
      this.distancia = "5,5 Km";
    }
    else if (this.categoria == "Sub 17") {
      this.desativarOpcoes = true;
      this.subCategoria = "Local";
      this.distancia = "5,5 Km";
    }
    else if (this.categoria == "Sub 13") {
      this.desativarOpcoes = true;
      this.subCategoria = "Local";
      this.distancia = "1 Km";
    }
    else if (this.categoria == "Sub 7") {
      this.desativarOpcoes = true;
      this.subCategoria = "Local";
      this.distancia = "340 m";
    }
    else if (this.categoria == "Adulto") {
      this.desativarOpcoes = true;
      this.subCategoria = "Local";
      this.distancia = "11 Km";
    }
    else if (this.categoria == "master") {
      this.desativarOpcoes = true;
      this.subCategoria = "Local";
      this.distancia = "11 Km";
    }
    else {
      this.desativarOpcoes = false;
    }
    console.log(this.desativarOpcoes, this.subCategoria, this.distancia)
  }

  ngOnInit() {
  }

  fotoIdentidadePaiBase64: string | null = null;
  fotoIdentidadeCriancaBase64: string | null = null;
  imagemPreviewBase64: string | null = null;
  fotoTermoResponsabilidadeBase64: string | null = null;
  fotoTermo1ResponsabilidadeBase64: string | null = null;

  converterParaBase64(event: any, tipo: 'pai' | 'crianca' | 'termo' | 'termo1') {
    const file = event.target.files[0];
    if (!file) return;

    const maxSizeMB = 4;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    if (file.size > maxSizeBytes) {
      this.presentAlert(`A imagem é muito grande. Tamanho máximo: ${maxSizeMB}MB.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      if (tipo === 'pai') {
        this.fotoIdentidadePaiBase64 = base64;
        console.log('Imagem pai base64:', base64);
      } else if (tipo === 'crianca') {
        this.fotoIdentidadeCriancaBase64 = base64;
        console.log('Imagem criança base64:', base64);
      } else if (tipo === 'termo') {
        this.fotoTermoResponsabilidadeBase64 = base64;
        console.log('Imagem termo base64:', base64);
      } else if (tipo === 'termo1') {
        this.fotoTermo1ResponsabilidadeBase64 = base64;
        console.log('Imagem termo base64:', base64);
      }
    };
    reader.readAsDataURL(file);
  }

  verImagem(tipo: 'pai' | 'crianca' | 'termo' | 'termo1') {
    if (tipo === 'pai') {
      this.imagemPreviewBase64 = this.fotoIdentidadePaiBase64;
    } else if (tipo === 'crianca') {
      this.imagemPreviewBase64 = this.fotoIdentidadeCriancaBase64;
    } else if (tipo === 'termo') {
      this.imagemPreviewBase64 = this.fotoTermoResponsabilidadeBase64;
    } else if (tipo === 'termo1') {
      this.imagemPreviewBase64 = this.fotoTermo1ResponsabilidadeBase64;
    }
  }

  fecharPreview() {
    this.imagemPreviewBase64 = null;
  }
  formatarNome() {
    if (this.nome) {
      this.nome = this.nome
        .normalize('NFD')                    // separa os acentos
        .replace(/[\u0300-\u036f]/g, '')     // remove os acentos
        .toUpperCase();                      // coloca tudo em maiúsculo
    }
  }
  async ConfirmacaoExlusao(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: "Tem certeza que deseja apagar sua inscrição?",
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'cancel-button',
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    if (role === 'confirm') {
      const loading = await this.loadingController.create({
        message: 'Apagando dados...',
        spinner: 'crescent'
      });

      await loading.present();

      let dados = {
        requisicao: "apagarCandidato",
        id: id
      };

      this.provider.requisicaoPost(dados, "/DB-corrida-sao-bartolomeu.php").subscribe(
        async (data) => {
          await loading.dismiss();
          this.presentAlert(data['mensagem']);
          this.aux_nome = ""; // Zera campo auxiliar
        },
        async (error) => {
          await loading.dismiss();
          this.presentAlert("Tente novamente mais tarde.");
          console.error(error);
        }
      );
    } else {
      console.log('Ação cancelada pelo usuário.');
    }
  }


  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  isProcessing = false;

  async meInscrever() {
    if (this.isProcessing) return;

    this.isProcessing = true;
    try {
      if (this.nome.length < 10)
        this.presentAlert("Informe seu nome e sobrenome.");
      else if (this.dataNascimento.length < 9)
        this.presentAlert("Infome corretamente sua data de nascimento.");
      else if (this.sexo == "")
        this.presentAlert("Informe sua orientação sexual.");
      else if (this.cpf.length < 10 || !this.validarCpf(this.cpf))
        this.presentAlert("Verifique seu CPF.");
      else if (this.cidade.length < 3)
        this.presentAlert("Informe o nome da sua cidade.");
      else if (this.telefone.length < 3 || !this.validarTelefone(this.telefone))
        this.presentAlert("Informe o seu numero de telefone/whatsapp.");
      else if (this.categoria == "")
        this.presentAlert("Informe a sua categoria.");
      else if (this.subCategoria == "")
        this.presentAlert("Informe a sua subcategoria.");
      else if (this.distancia == "")
        this.presentAlert("Informe a distancia.");
      else if (this.termo == false)
        this.presentAlert("Concorde com os termos");
      else {
        return new Promise((resolve, reject) => {
          let dados = {
            requisicao: "salvarCandidato",
            dataNascimento: this.dataNascimento,
            nome: this.nome,
            sexo: this.sexo,
            subCategoria: this.subCategoria,
            categoria: this.categoria,
            cpf: this.cpf,
            cidade: this.cidade,
            equipe: this.equipe,
            celular: this.telefone,
            distancia: this.distancia,
            fotoIdentidadePaiBase64: this.fotoIdentidadePaiBase64,
            fotoIdentidadeCriancaBase64: this.fotoIdentidadeCriancaBase64,
            fotoTermoResponsabilidadeBase64: this.fotoTermoResponsabilidadeBase64,
            fotoTermo1ResponsabilidadeBase64: this.fotoTermo1ResponsabilidadeBase64
          }
          console.log(dados);
          this.provider.requisicaoPost(dados, "/DB-corrida-sao-bartolomeu.php").subscribe((data) => {
            this.presentAlert(data['mensagem'])
          }, (error) => {
            this.presentAlert("Tente novamente mais tarde.");
            console.log(error);
          })
        });

      }
    } catch (err) {
      console.error("Erro ao se inscrever", err);
    } finally {
      // Espera 5 segundos antes de permitir novo clique
      setTimeout(() => {
        this.isProcessing = false;
      }, 5000);
    }
  }
  formatarNumeroComZeros(numero: number): string {
    return numero.toString().padStart(3, '0');
  }

  puxarCandidato() {
    //    this.print("comprovante");
    console.log(this.cpf)
    if (this.cpf.length == 11)
      return new Promise((resolve, reject) => {
        let dados = {
          requisicao: "verCandidato",
          cpf: this.cpf,
        }
        this.provider.requisicaoPost(dados, "/DB-corrida-sao-bartolomeu.php").subscribe((data) => {

          if (data['status'] == 200)
            for (let i of data['dados']) {
              console.log(i.nome)
              this.nome = i.nome;
              this.cpf = i.cpf;
              this.dataNascimento = i.dataNascimento;
              this.sexo = i.sexo;
              this.cidade = i.cidade;
              this.categoria = i.categoria;
              this.subCategoria = i.subCategoria;
              this.distancia = i.distancia;
              this.equipe = i.equipe;
              this.telefone = i.celular;
              this.numeroCorredor = this.formatarNumeroComZeros(i.id);
              this.id = i.id;
              break;
            }
        }, (error) => {
          console.log(error);
        })
      });
  }


  async atualizarCadastro() {

    if (this.isProcessing) return;

    this.isProcessing = true;
    try {
      if (this.nome.length < 10)
        this.presentAlert("Informe seu nome e sobrenome.");
      else if (this.dataNascimento.length < 9)
        this.presentAlert("Infome corretamente sua data de nascimento.");
      else if (this.sexo == "")
        this.presentAlert("Informe sua orientação sexual.");
      else if (this.cpf.length < 10)
        this.presentAlert("Informe seu CPF completo.");
      else if (this.cidade.length < 3)
        this.presentAlert("Informe o nome da sua cidade.");
      else if (this.telefone.length < 3)
        this.presentAlert("Informe o seu numero de telefone/whatsapp.");
      else if (this.categoria == "")
        this.presentAlert("Informe a sua categoria.");
      else if (this.subCategoria == "")
        this.presentAlert("Informe a sua subcategoria.");
      else if (this.distancia == "")
        this.presentAlert("Informe a distancia.");
      else if (this.termo == false)
        this.presentAlert("Concorde com os termos");
      else {
        return new Promise((resolve, reject) => {
          let dados = {
            requisicao: "atualizarCandidato",
            dataNascimento: this.dataNascimento,
            nome: this.nome,
            sexo: this.sexo,
            subCategoria: this.subCategoria,
            categoria: this.categoria,
            cpf: this.cpf,
            cidade: this.cidade,
            equipe: this.equipe,
            celular: this.telefone,
            distancia: this.distancia,
            fotoIdentidadePaiBase64: this.fotoIdentidadePaiBase64,
            fotoIdentidadeCriancaBase64: this.fotoIdentidadeCriancaBase64,
            fotoTermoResponsabilidadeBase64: this.fotoTermoResponsabilidadeBase64,
            fotoTermo1ResponsabilidadeBase64: this.fotoTermo1ResponsabilidadeBase64,
            id: this.id
          }
          console.log(this.id)
          this.provider.requisicaoPost(dados, "/DB-corrida-sao-bartolomeu.php").subscribe((data) => {
            this.presentAlert(data['mensagem'])
          }, (error) => {
            this.presentAlert("Tente novamente mais tarde.");
            console.log(error);
          })
        });
      }
    } catch (err) {
      console.error("Erro ao se inscrever", err);
    } finally {
      // Espera 10 segundos antes de permitir novo clique
      setTimeout(() => {
        this.isProcessing = false;
      }, 10000);
    }
  }

  limparCpf(cpf: string): string {
    // Remove tudo que não for número
    return cpf.replace(/\D/g, '');
  }

  verificarCPF() {
    //    this.print("comprovante");
    return new Promise((resolve, reject) => {
      let dados = {
        requisicao: "verCandidato",
        cpf: this.cpf2,
        cpf2: this.limparCpf(this.cpf2)
      }
      console.log(dados)
      this.provider.requisicaoPost(dados, "/DB-corrida-sao-bartolomeu.php").subscribe((data) => {
        if (data['status'] == 200 && (this.cpf2.length == 11 || this.cpf2.length == 14))
          for (let i of data['dados']) {
            this.aux_nome = i.nome;
            this.aux_cpf = i.cpf;
            this.aux_dataNascimento = i.dataNascimento;
            this.aux_sexo = i.sexo;
            this.aux_categoria = i.categoria;
            this.aux_subCategoria = i.subCategoria;
            this.aux_distancia = i.distancia;
            this.aux_equipe = i.equipe;
            this.aux_celular = i.celular;
            this.aux_dataInscricao = this.AlterarData(i.dataInscricao);
            this.numeroCorredor = this.formatarNumeroComZeros(i.id);
            this.id = i.id;
            break;
          }
        else {
          this.aux_nome = "";
          this.aux_cpf = "";
          this.aux_dataNascimento = "";
          this.aux_sexo = "";
          this.aux_categoria = "";
          this.aux_subCategoria = "";
          this.aux_distancia = "";
          this.aux_equipe = "";
          this.aux_celular = "";
          this.aux_dataInscricao = "";
        }

      }, (error) => {
        console.log(error);
      })
    });
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
}
