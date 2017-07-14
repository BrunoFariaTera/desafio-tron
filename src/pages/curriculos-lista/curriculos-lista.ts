import { Curriculo } from './../../negocio/models';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'curriculos-lista',
  templateUrl: 'curriculos-lista.html',
})
export class CurriculosListaPage {

  curriculos: Curriculo[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events) {
    events.subscribe('carregueCurriculos', (curriculos) => {
      this.curriculos = curriculos;
    });
  }
}
