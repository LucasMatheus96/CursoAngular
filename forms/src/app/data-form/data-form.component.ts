import { Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  

  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)

    this.formulario = this.formBuilder.group({
        nome:[null ,[Validators.required, Validators.min(3), Validators.max(20)]],
       email:[null, [Validators.required,Validators.email]]
    });
  }
  

    onSubmit(){
      console.log(this.formulario)

      this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value)).subscribe((dados: any) =>{
         console.log(dados);

         //RESETA O FORM
       this.resetar();
        },
        (error:any) => alert('erro')
        );
    }

    resetar(){
      this.formulario.reset();
    }
 
}
