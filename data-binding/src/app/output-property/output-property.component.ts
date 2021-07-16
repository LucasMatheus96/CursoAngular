import { Component, Input, OnInit ,EventEmitter, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter

  @ViewChild('campoInput') campoValorInput:HTMLElement | undefined


  incrimenta(){
  console.log(this.campoValorInput)
  this.valor += 1;
  this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor -= 1;
    this.mudouValor.emit({novoValor: this.valor})
    };


    onMudouValor(evento:number) {
     console.log(evento)
   };
  constructor() { }

  ngOnInit(): void {
  }

}
