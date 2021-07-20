


import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes:Routes =[
    {path: 'cursos', component:CursosComponent}  ,
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    {path: 'cursos/:id', component:CursoDetalheComponent}   
    
];

@NgModule({
    imports: [RouterModule.forRoot(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule{

}
