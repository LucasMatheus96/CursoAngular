import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


    url:string = 'http://loiane.com';
    cursoAngular: boolean = true;
    urlImagem:string = 'http://lorempixel.com/400/200/'
    valorAtual:string = ''
    valorSalvo:string= ''
    isMouseOver:boolean=  false;

    nome:string= 'abc';

    pessoa:any = {
      nome:'Lucas',
      idade:20
    };

    nomeDoCurso:string = "Angular"

    
    getValor(){
      return 1 
    };

    getCurtiCurso(){
      return true
    };

    botaoClicado(){
      alert('Botão clicado!')
    };

    onKeyUp(evento:KeyboardEvent){
     this.valorAtual= (<HTMLInputElement>evento.target).value;
     }

     salvarValor(valorSalvo=''){
       this.valorSalvo = valorSalvo;

     }

     onMouseOverOut(pIsMouse:any){
      this.isMouseOver = !this.isMouseOver
     }

  constructor() { }

  ngOnInit(): void {
  }

}
