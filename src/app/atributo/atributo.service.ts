import { Atributo } from './atributo';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtributoService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/atributos';
  }

  adicionar(atributo: Atributo) {
    console.log('adicionar', atributo);
    return this.httpClient.post(this.apiUrl, atributo);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(atributo: Atributo) {
    console.log('excluir', atributo);
    return this.httpClient.delete(this.apiUrl + '/' + atributo.id);
  }

}

