import { NgModule } from "@angular/core";

import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from "./cursos/cursos.component";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";


const cursosRoutes:Routes =[
    // {path: 'cursos', loadChildren:'app/cursos/cursos.module#CursosModule'},
    // {path: 'alunos', loadChildren:'app/alunos/alunos.module#AlunosModule'},
    {path: 'cursos', component: CursosComponent },
    {path: 'curso/:id', component: CursoDetalheComponent },
    {path: 'login', component:LoginComponent},
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    {path: '', component: HomeComponent } 
    // {path: 'cursos', component:CursosComponent}  ,
    // {path: 'curso/:id', component:CursoDetalheComponent}  ,
    
   
];


@NgModule({
    imports: [RouterModule.forRoot(cursosRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

    
}