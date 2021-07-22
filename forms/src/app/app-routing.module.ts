import { DataFormComponent } from './data-form/data-form.component';
import { TeamplateFormComponent } from './teamplate-form/teamplate-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[

    {path: 'templateForm',
     component:TeamplateFormComponent},

    {path: 'dataForm',
     component:DataFormComponent},

    {path: '',
     pathMatch:'full',
     redirectTo:'dataForm'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
