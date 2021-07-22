import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-teamplate-form',
  templateUrl: './teamplate-form.component.html',
  styleUrls: ['./teamplate-form.component.css']
})


export class TeamplateFormComponent implements OnInit {

  usuario:any = {
    nome: null,
    email:null
  }

  onSubmit(f:any){
    console.log(f)
    console.log(this.usuario)
  }
  constructor() { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo:any){
    return  !campo.valid && !campo.touched;
  }
  
  aplicaCssErro(campo:any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }

  }

   consultaCEP(cep:any){}

  //   var cep = cep.replace(/\D/g,'')

  //   if(cep !=""){
  //     var validacep = /^[0-9]{8}$/;

  //     if(validacep.test(cep)){

  //       this.http.get( `//viacep.com.br/ws/${cep}/json`).subscribe((dados:any) => dados.json())
        

  //     }
  //   }

 
 
}
