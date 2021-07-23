import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { DataFormModule } from './data-form.module';
import { EstadoBr } from './../shared/models/estado-br.models';
import { DropdownService } from './../shared/services/dropdown.service';
import { Observable, Subscription } from 'rxjs';
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
  // estados: EstadoBr[];
  estados:Observable<EstadoBr[]>
  cargos:any[];
  tecnologias: any[];
  newsletterOp: any[];

  frameworks = ['Angular', 'React', 'Vue','Sencha' ]



  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private dropdownService: DropdownService,
    private cepService:ConsultaCepService
    ) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)

    // this.dropdownService.getEstadosBr()
    // .subscribe(dados => {this.estados = dados; console.log(dados);})

    this.estados= this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();

    this.tecnologias = this.dropdownService.getTecnologias();

    this.newsletterOp = this.dropdownService.getNewsletter();


  //  console.log(this.dropdownService.getEstadosBr()
  //  .subscribe(dados => this.estados = dados)) 

    this.formulario = this.formBuilder.group({
        nome:[null ,[Validators.required, Validators.min(3), Validators.max(20)]],
        email:[null, [Validators.required,Validators.email]],

        endereco:this.formBuilder.group({
          cep:[null ,[Validators.required]],
          numero:[null ,[Validators.required]],
          complemento:[],
          rua:[null ,[Validators.required]],
          bairro:[null ,[Validators.required]],
          cidade:[null ,[Validators.required]],
          estado:[null ,[Validators.required]]
        }),

      cargo: [null],
      tecnologias: [null],
      newsletter:[null],
      termos:[null,Validators.pattern('true')],
      frameworks:this.buildFrameworks()
    });
  }
  
  buildFrameworks(){


    const values = this.frameworks.map(v => new FormControl(false));


    return this.formBuilder.array(values);

   
  }
    onSubmit(){
      console.log(this.formulario)

      let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v:any, i:any) => v ? this.frameworks[i] : null)
      .filter((v:any) => v !== null)
    });

    console.log(valueSubmit);
      if(this.formulario.valid){
        this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value)).subscribe((dados: any) =>{
          console.log(dados);
 
          //RESETA O FORM
        this.resetar();
         },
         (error:any) => alert('erro')
         );
      }else{
          console.log('formulario invalido')

          this.verificaValidacoesForm(this.formulario)
      }
    
    }

    verificaValidacoesForm(formGroup: FormGroup){
      Object.keys(formGroup.controls).forEach(campo => {
        console.log(campo)
        const controle = formGroup.get(campo);
        controle?.markAsDirty()
        if(controle instanceof FormGroup){
          this.verificaValidacoesForm(controle)
        }
      })
    }
    resetar(){
      this.formulario.reset();
    }
 
    verificaValidTouched(campo:any){


      return !this.formulario.get(campo)?.valid &&   (this.formulario.get(campo)?.touched ||  this.formulario.get(campo)?.dirty)
 
    }


    verificaEmailInvalido()
      {
        let campoEmail:any = this.formulario.get('email');
        if (campoEmail.errors){
          return campoEmail.errors['email'] && campoEmail?.touched
        }
      }     
    

    aplicaCssErro(campo:any){
       return {
         'has-error': this.verificaValidTouched(campo),
         'has-feedback': this.verificaValidTouched(campo)
       }
    }

    consultaCEP()
    {

      let cep =  this.formulario.get('endereco.cep')?.value
      
        cep = cep.replace(/\D/g,'')


        if(cep != "") {

          var validacep = /^[0-9]{8}$/;

          if (cep != null && cep !== '') {
            this.cepService.consultaCEP(cep)
            .subscribe(dados => this.populaDadosForm(dados));
          }

        }
      }
     
      populaDadosForm(dados:any) {
        // this.formulario.setValue({});
    
        this.formulario.patchValue({
          endereco: {
            rua: dados.logradouro,
            // cep: dados.cep,
            complemento: dados.complemento,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }
        });
      }
        resetaDadosForm() {
          this.formulario.patchValue({
            endereco: {
              rua: null,
              complemento: null,
              bairro: null,
              cidade: null,
              estado: null
            }
          });        
        }   
        
       
        setarCargo() {
          const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
          this.formulario.get('cargo')?.setValue(cargo);
        }

        compararCargos(obj1:any, obj2:any) {
          return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
        }


        setarTecnologias() {
          this.formulario.get('tecnologias')?.setValue(['java','php','ruby'])
        }
       

}
