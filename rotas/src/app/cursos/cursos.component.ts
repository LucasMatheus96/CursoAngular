import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos:any
  pagina: number = 0 ;
  inscricao: Subscription = new Subscription;
  constructor(
    private cursosServices:CursosService,
    private route:ActivatedRoute,
    private router:Router 
    ) { }

  ngOnInit(): void {
    this.cursos = this.cursosServices.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams:any) =>{
        this.pagina = queryParams['pagina']
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    this.pagina++
    this.router.navigate(['/cursos/naoEncontrado'],
    {queryParams:{'pagina':this.pagina}});
  }

}
