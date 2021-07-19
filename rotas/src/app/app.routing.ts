
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES:Routes =[
    {path: 'login', component:LoginComponent},
    {path: 'cursos', component:CursosComponent}  ,
    {path: '', component: HomeComponent } 
];

export const routing:ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);