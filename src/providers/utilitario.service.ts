import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilitarioService {

  constructor(public http: Http) {
  }

  public PesquisaPartes(textoPesquisado: string, textoDaPesquisa: string): boolean {
    textoPesquisado = this.GetStringNoAccents(textoPesquisado).toLowerCase();
    textoDaPesquisa = this.GetStringNoAccents(textoDaPesquisa).toLowerCase();

    var partes = textoDaPesquisa.split(' ');
    return partes.every(parte => this.GetStringNoAccents(textoPesquisado).includes(parte.trim()));
  }

  public GetStringNoAccents(str: string): string {
    if (!str) return '';

    var acentos = "çÇáéíóúýÁÉÍÓÚÝàèìòùÀÈÌÒÙãõñäëïöüÿÄËÏÖÜÃÕÑâêîôûÂÊÎÔÛºª°ø§";
    var semAcento = "cCaeiouyAEIOUYaeiouAEIOUaonaeiouyAEIOUAONaeiouAEIOU     ";

    for (var i = 0; i < acentos.length; i++) {
      str = str.replace(acentos[i], semAcento[i]);
    }

    return str;
  }
}
