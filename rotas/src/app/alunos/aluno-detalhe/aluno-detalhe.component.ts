import { AlunosService } from './../alunos.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno:any;
  inscricao: Subscription = new Subscription;

  constructor(
    private route:ActivatedRoute  ,
    private router:Router,
    private alunosService:AlunosService
    ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    )
  }

  editarContato(){
    this.router.navigate(['/alunos',this.aluno.id, 'editar'])
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }
}
