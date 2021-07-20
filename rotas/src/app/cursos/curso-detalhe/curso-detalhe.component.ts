
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id:any;
  inscricao: Subscription = new Subscription;
  curso:any;
  

  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private cursosService:CursosService
    )
    { 
    // this.id = this.route.snapshot.params['id']; 
  }

  ngOnInit(): void {
    this.inscricao=  this.route.params.subscribe(
      (params:any) => {
        this.id = params['id']
     
        this.curso = this.cursosService.getCurso(this.id);
         
       if (this.curso == null|| this.curso.length == 0){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe()
  }
}
