
    import { FormsModule } from '@angular/forms';
    import { AlunoFormComponent } from './aluno-form/aluno-form.component';

    import { NgModule } from '@angular/core';

    import { CommonModule } from '@angular/common';
    import { AlunosComponent } from './alunos.component';

    import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
    import { AlunosRoutingModule } from './alunos.routing.modules';

    import { AlunosService } from './alunos.service';
    @NgModule({
        imports:[
            CommonModule,
            FormsModule,
            AlunosRoutingModule
        ],
        exports:[],
        declarations:[
            AlunosComponent,
            AlunoFormComponent,
            AlunoDetalheComponent
        ],
        providers:[AlunosService],
    })
    export class AlunosModule{ }

