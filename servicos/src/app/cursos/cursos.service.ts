import { Injectable } from "@angular/core";
import { EventManager } from "@angular/platform-browser";
import * as EventEmitter from "events";

import { LogService } from "../shared/log.service";

@Injectable()
 export class CursosService{
    
    emiitirCursoCriado = new EventEmitter();
    



    private cursos:string[] = ['Angular2','java', 'PhoneGap']


    constructor(private _logService:LogService){
        this._logService = new LogService();
    };

    
    
    getCursos(){
        return this.cursos;
    };

    onAddCurso(curso:string){
        this.cursos.push(curso);
        this.emiitirCursoCriado.emit(curso);
    };
}