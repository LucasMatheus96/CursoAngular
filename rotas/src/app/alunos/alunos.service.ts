import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] =
  [    {id: 1, nome:'Aluno 01', email: 'aluno001@gmail.com'},
       {id: 2, nome:'Aluno 02', email: 'aluno002@gmail.com'},
       {id: 3, nome:'Aluno 03', email: 'aluno003@gmail.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id:number){
    for(let i= 0; i <this.alunos.length; i++){
      let aluno = this.alunos[i]
      if (aluno.id == id){
        return aluno;
      }
    }
    return null
    

  }
  constructor() { }
}
