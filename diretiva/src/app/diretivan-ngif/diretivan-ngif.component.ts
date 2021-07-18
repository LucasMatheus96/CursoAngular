import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivan-ngif',
  templateUrl: './diretivan-ngif.component.html',
  styleUrls: ['./diretivan-ngif.component.css']
})
export class DiretivanNgifComponent implements OnInit {

  cursos:string[] = [];
  mostrarCursos:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCurso(){
    this.mostrarCursos = !this.mostrarCursos;
  };
}
