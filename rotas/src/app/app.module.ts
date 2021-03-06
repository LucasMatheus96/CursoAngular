import { AlunosGuard } from './guards/alunos.guard';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
 import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursoks/curso-detalhe/curso-detalhe.component';

import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.modules';


import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    //  CursosComponent,
    //  CursoDetalheComponent,
    //  CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   
     CursosModule,
     AlunosModule,
     AppRoutingModule
  ],
   providers: [
     CursosService,
     AuthService,
     AuthGuard,
     CursosGuard,
      AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
