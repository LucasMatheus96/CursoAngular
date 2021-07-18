import { Injectable } from "@angular/core";
import * as EventEmitter from "events";

@Injectable()
 export class CursosService{
    
    emiitirCursoCriado = new EventEmitter();



    private cursos:string[] = ['Angular2','java', 'PhoneGap']
    
    
    getCursos(){
        return this.cursos;
    };

    onAddCurso(curso:string){
        this.cursos.push(curso);
        this.emiitirCursoCriado.emit(curso);
    };
}