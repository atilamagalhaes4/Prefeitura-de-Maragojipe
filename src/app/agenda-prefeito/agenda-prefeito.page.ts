import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { PostProvider } from 'src/assets/providers/post-provider';

interface EventoAgenda {
  id: number,
  dia: string;
  horario: string;
  local: string;
  titulo: string;
  descricao?: string;
}

@Component({
  selector: 'app-agenda-prefeito',
  templateUrl: './agenda-prefeito.page.html',
  styleUrls: ['./agenda-prefeito.page.scss'],
})
export class AgendaPrefeitoPage implements OnInit {

  alternar: boolean = true;
  pesquisa: string = "";

  // Credenciais de administração
  private readonly ADMIN_USERNAME = 'admin';
  private readonly ADMIN_PASSWORD = 'prefeitura123';

  agenda: EventoAgenda[] = [
  ];

  diasUnicos: string[] = [];
  agendaAgrupada: { [key: string]: EventoAgenda[] } = {};
  eventosPorPagina: number = 10;
  paginaAtual: number = 1;
  isAuthenticated: boolean = false;
  mostrarTodosEventos: boolean = false;

  constructor(
    private platform: Platform,
    private provider: PostProvider,
    private route: Router,
    private alertController: AlertController
  ) {

  }

  pegarAgenda() {
    let dados = {
      requisicao: "pegarAgenda"
    }
    this.provider.requisicaoPost(dados, "/agenda-prefeito.php").subscribe((data) => {
      if (data['status'] == 200) {
        this.agenda = [];
        for (let c of data['resultado']) {
          this.agenda.push(c);
        }
        this.agruparAgendaPorDia();
      }

    }, (error) => {

    });



  }
agruparAgendaPorDia() {
  this.agendaAgrupada = {};
  
  this.agenda.forEach(evento => {
    if (!this.agendaAgrupada[evento.dia]) {
      this.agendaAgrupada[evento.dia] = [];
    }
    this.agendaAgrupada[evento.dia].push(evento);
  });

  // Apenas inverte a ordem dos dias
  this.diasUnicos = Object.keys(this.agendaAgrupada).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );
}
  get eventosVisiveis(): string[] {
    if (this.mostrarTodosEventos) return this.diasUnicos;

    let eventosContados = 0;
    const diasParaMostrar: string[] = [];

    for (const dia of this.diasUnicos) {
      const eventosDoDia = this.agendaAgrupada[dia];
      if (eventosContados + eventosDoDia.length <= this.paginaAtual * this.eventosPorPagina) {
        diasParaMostrar.push(dia);
        eventosContados += eventosDoDia.length;
      } else break;
    }
    return diasParaMostrar;
  }

  get totalEventos(): number {
    return this.agenda.length;
  }

  get haMaisEventos(): boolean {
    return this.eventosVisiveis.length < this.diasUnicos.length;
  }

  getTotalEventosVisiveis(): number {
    let total = 0;
    this.eventosVisiveis.forEach(dia => {
      total += this.agendaAgrupada[dia].length;
    });
    return total;
  }

  carregarMais() {
    this.paginaAtual++;
  }

  mostrarTodos() {
    this.mostrarTodosEventos = true;
  }

  formatarData(data: string): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    };
    return new Date(data).toLocaleDateString('pt-BR', options);
  }

  getIconePorTitulo(titulo: string): string {
    const tituloLower = titulo.toLowerCase();
    if (tituloLower.includes('reunião') || tituloLower.includes('reuniao')) return 'people-outline';
    else if (tituloLower.includes('sessão') || tituloLower.includes('sessao')) return 'business-outline';
    else if (tituloLower.includes('inauguração') || tituloLower.includes('inauguracao')) return 'ribbon-outline';
    else if (tituloLower.includes('visita') || tituloLower.includes('obra')) return 'construct-outline';
    else if (tituloLower.includes('audiência') || tituloLower.includes('audiencia')) return 'megaphone-outline';
    else if (tituloLower.includes('evento') || tituloLower.includes('cerimônia') || tituloLower.includes('cerimonia')) return 'star-outline';
    else return 'calendar-outline';
  }

  // AUTENTICAÇÃO
  async abrirPopupLogin() {
    const alert = await this.alertController.create({
      header: 'Acesso Administrativo',
      message: 'Digite o login e senha para editar a agenda',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Usuário',
          attributes: { autocapitalize: 'off' }
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Senha',
          attributes: { autocapitalize: 'off' }
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel', cssClass: 'secondary' },
        {
          text: 'Entrar',
          handler: (data) => this.verificarCredenciais(data.username, data.password)
        }
      ],
      cssClass: 'login-alert'
    });
    await alert.present();
  }

  verificarCredenciais(username: string, password: string): boolean {
    if (username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD) {
      this.isAuthenticated = true;
      this.mostrarAlert('Acesso Permitido', 'Agora você pode editar a agenda.', 'success');
      return true;
    } else {
      this.mostrarAlert('Acesso Negado', 'Usuário ou senha incorretos.', 'error');
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
  }

  // ADICIONAR EVENTOS
  async add() {
    if (!this.isAuthenticated) {
      this.abrirPopupLogin();
      return;
    }
    await this.abrirPopupAdicionarEvento();
  }

  async adicionarEventoNoDia(dia: string) {
    if (!this.isAuthenticated) {
      this.abrirPopupLogin();
      return;
    }
    await this.abrirPopupAdicionarEvento(dia);
  }

  private async abrirPopupAdicionarEvento(diaEspecifico?: string) {
    const inputs = [];

    if (diaEspecifico) {
      inputs.push({
        name: 'horario', type: 'time', placeholder: 'Horário', value: '09:00'
      });
    } else {
      inputs.push(
        {
          name: 'dia', type: 'date', placeholder: 'Data do Evento',
          value: new Date().toISOString().split('T')[0],
          attributes: { min: new Date().toISOString().split('T')[0] }
        },
        { name: 'horario', type: 'time', placeholder: 'Horário', value: '09:00' }
      );
    }

    inputs.push(
      { name: 'local', type: 'text', placeholder: 'Local do Evento', attributes: { maxlength: 100 } },
      { name: 'titulo', type: 'text', placeholder: 'Título do Compromisso', attributes: { maxlength: 50 } },
      { name: 'descricao', type: 'textarea', placeholder: 'Descrição (opcional)', attributes: { maxlength: 200, rows: 3 } }
    );

    const alert = await this.alertController.create({
      header: diaEspecifico ? 'Adicionar Evento' : 'Adicionar Novo Evento',
      subHeader: diaEspecifico ? `Data: ${this.formatarData(diaEspecifico)}` : 'Preencha os dados do novo compromisso',
      inputs: inputs,
      buttons: [
        { text: 'Cancelar', role: 'cancel', cssClass: 'secondary' },
        {
          text: 'Adicionar',
          handler: (data) => {
            const dadosCompletos = diaEspecifico ? { ...data, dia: diaEspecifico } : data;
            this.adicionarNovoEvento(dadosCompletos);
          }
        }
      ],
      cssClass: 'add-event-alert'
    });
    await alert.present();
  }

  private adicionarNovoEvento(dados: any) {
    if (!dados.dia || !dados.horario || !dados.local || !dados.titulo) {
      this.mostrarAlert('Erro', 'Por favor, preencha todos os campos obrigatórios.', 'error');
      return false;
    }

    const dataEvento = new Date(dados.dia);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    if (dataEvento < hoje) {
      this.mostrarAlert('Erro', 'A data do evento não pode ser no passado.', 'error');
      return false;
    }

    let data = {
      requisicao: "salvarAgenda",
      dia: dados.dia,
      horario: dados.horario,
      local: dados.local,
      titulo: dados.titulo,
      descricao: dados.descricao || ''
    };
    this.provider.requisicaoPost(data, "/agenda-prefeito.php").subscribe((data) => {
      if (data["status"] == 200) {
        this.mostrarAlert('Sucesso!', 'Evento adicionado com sucesso!', 'success');
        this.pegarAgenda();
        return true;
      }
      else {
        this.mostrarAlert('Erro!', 'Não foi possivel adicionar o evento', 'error');
        return false
      }
    });

  }

  // REMOVER EVENTOS
  async excluirEvento(evento: EventoAgenda) {
    if (!this.isAuthenticated) {
      this.abrirPopupLogin();
      return;
    }

    const alert = await this.alertController.create({
      header: 'Confirmar Exclusão',
      message: `Tem certeza que deseja excluir o evento "<strong>${evento.titulo}</strong>"?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel', cssClass: 'secondary' },
        {
          text: 'Excluir',
          cssClass: 'danger-button',
          handler: () => {
            console.log(evento.id)
            let data = {
              requisicao: "deletarAgenda",
              id: evento.id
            };
            this.provider.requisicaoPost(data, "/agenda-prefeito.php").subscribe((data) => {
              if (data["status"] == 200) {
                this.mostrarAlert('Sucesso!', 'Evento deletado com sucesso!', 'success');
                this.pegarAgenda();
                return true;
              }
              else {
                this.mostrarAlert('Erro!', 'Não foi possivel deletar o evento', 'error');
                return false
              }
            });
          }
        }
      ],
      cssClass: 'delete-alert'
    });
    await alert.present();
  }

  // ALERTAS
  private async mostrarAlert(titulo: string, mensagem: string, tipo: 'success' | 'error') {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
      cssClass: `${tipo}-alert`
    });
    await alert.present();
  }

  // MÉTODOS EXISTENTES DO SEU CÓDIGO
  ngOnInit() { }

  ionViewWillEnter() {
    this.pegarAgenda();
    if (this.platform.is("mobile")) this.alternar = false;
    if (this.platform.is("desktop")) this.alternar = true;
  }

  pesquisarNoticias() {
    this.route.navigate(["/mais-noticias/" + this.pesquisa]);
  }

  ir(url) {
    this.route.navigate([url]);
  }
}