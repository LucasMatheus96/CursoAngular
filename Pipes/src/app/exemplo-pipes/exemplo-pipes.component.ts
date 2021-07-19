import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro:any= {
    titulo: 'Learning JavaScript Data structures and Algorithms',
    raiting: 4.54321,
    numeroPaginas:314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url:'http://a.co/glqjpRP'
  }

  livros:string[] = ['Java', 'Angular 2'];

  filtro:string = ''
  constructor() { }

  ngOnInit(): void {
    
  }

  addCurso(valor:any){
    this.livros.push(valor);
  }

  // getCursos(){

  //   if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
  //     return this.livros
  //   }


  //   return this.livros.filter((v:any) => {
  //     if ( v.toLocaleLowerCase().indefOf(this.filtro)>= 0)
  //     return true;
  //   }    
  //     return false;
  // });


}
