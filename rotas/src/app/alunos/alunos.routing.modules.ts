import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';

import { RouterModule, CanDeactivate } from '@angular/router';
import { NgModule } from "@angular/core";

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { resolve } from 'url';


const alunosRoutes = [

    {   path: 'alunos', component: AlunosComponent, 
        children :[
                    {path:'novo', component: AlunoFormComponent,},
                    {path:':id', component: AlunoDetalheComponent,
                        resolve:{ aluno: AlunoDetalheResolver}                    
                    },

                    {path:':id/editar', component: AlunoFormComponent,
                        CanDeactivate:[AlunosDeactivateGuard]}    
    ]},
   
    

];

@NgModule({

    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule{

}