import { Curriculo } from './../negocio/models';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CurriculoService {
  curriculosUrl: string = 'app/curriculos';
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  findAll(): Promise<Curriculo[]> {
    return this.http.get(this.curriculosUrl)
      .toPromise()
      .then(resposta => resposta.json().data as Curriculo[])
      .catch(this.handleError);
  }

  create(contato: Curriculo): Promise<Curriculo> {
    return this.http
      .post(this.curriculosUrl, JSON.stringify(contato), { headers: this.headers })
      .toPromise()
      .then((resposta: Response) => resposta.json().data as Curriculo)
      .catch(this.handleError);
  }

  handleError(err: any): Promise<any> {
    console.log("Error:", err);
    return Promise.reject(err.message || err);
  }

}
