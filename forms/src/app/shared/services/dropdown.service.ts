
import { HttpClientModule, HttpResponse ,HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from '../models/estado-br.models';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http:HttpClient) { }

  getEstadosBr(){
    // return this.http.get('assetes/dados/estadosbr.json').pipe();
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCargos(){
    return [ 
      { nome:'dev', nivel: 'junior', desc:'Dev jr'},
      { nome:'dev', nivel: 'Pleno', desc:'Dev pl'},
      { nome:'dev', nivel: 'Senior', desc:'Dev Sr'},
    ]
  }
  getTecnologias() {

    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' }
    ];
  }

  getNewsletter(){
    return [
      {valor:'s', desc:'Sim'},
      {valor:'n', desc:'Não'}
    ]
  }
}
