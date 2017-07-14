import { UtilitarioService } from './../../providers/utilitario.service';
import { Curriculo } from './../../negocio/models';
import { CurriculoService } from './../../providers/curriculo.service';
import { CadastroCurriculoPage } from './../cadastro-curriculo/cadastro-curriculo';
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Events } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild('inputSearch') myInput;

  curriculos: Curriculo[] = [];
  curriculosBuscados: Curriculo[] = [];

  descricaoDaPagina: string;
  inputPesquisa: string;
  segSelecionado: string;

  pesquisaVisivel: boolean = false;
  iconeBuscaVisivel: boolean = true;


  constructor(
    public navCtrl: NavController,
    private curriculoService: CurriculoService,
    private events: Events,
    private utilitario: UtilitarioService,
    private keyboard: Keyboard) {

    this.segSelecionado = "0";
    this.AjustaDescricaoDaPagina();
  }

  ngOnInit() {    
    this.carregueCurriculos();
  }

  private carregueCurriculos(): void {
    this.curriculoService.findAll()
      .then((curriculos: Curriculo[]) => {
        this.curriculos = curriculos;
        this.events.publish('carregueCurriculos', curriculos);
      });
  }

  segmentChanged() {
    this.AjustaDescricaoDaPagina();
    this.slides.slideTo(parseInt(this.segSelecionado), 500);
    this.limpePesquisa();
  }

  private AjustaDescricaoDaPagina(): void {
    if (this.segSelecionado == "0") {
      this.iconeBuscaVisivel = true;
      this.descricaoDaPagina = "Currículos";
    } else if (this.segSelecionado == "1") {
      this.iconeBuscaVisivel = false;
      this.descricaoDaPagina = "Dashboard";
    }
  }

  vaParaPaginaCadastroDeCurriculo() {
    this.navCtrl.push(CadastroCurriculoPage);
  }

  slideChanged() {
    this.segSelecionado = this.slides.getActiveIndex().toString();
    
  }

  changeInput() {
    this.curriculosBuscados = this.curriculos.filter(curriculo => this.utilitario.PesquisaPartes(curriculo.Nome, this.inputPesquisa));
    this.events.publish('carregueCurriculos', this.curriculosBuscados);
  }

  searchCurriculos() {
    this.pesquisaVisivel = !this.pesquisaVisivel;

    setTimeout(() => {
      this.keyboard.show();
      this.myInput.setFocus();
    }, 150);

  }

  limpePesquisa() {
    this.pesquisaVisivel = false;
    this.inputPesquisa = "";
    this.curriculosBuscados = this.curriculos;    
    this.carregueCurriculos();
  }

}
