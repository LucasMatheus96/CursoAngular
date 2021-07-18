import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-style',
  templateUrl: './diretivas-ng-style.component.html',
  styleUrls: ['./diretivas-ng-style.component.css']
})
export class DiretivasNgStyleComponent implements OnInit {

  ativo:boolean =false;
  tamanhoFonte:number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }
  

}
