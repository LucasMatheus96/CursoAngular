import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno:any;
  inscricao: Subscription = new Subscription;

  constructor(
    private route:ActivatedRoute ,
    private router:Router,
    private alunosService:AlunosService
  ) { }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe(
      (params:any)=> {
        let id = params['id']
        this.aluno= this.alunosService.getAluno(id)
      }
    )
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

 
}
