import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  pure: true
})
export class FiltroArrayPipe implements PipeTransform {

  
  transform(value: any, args?:any):any{

     
    if (value.length === 0 || args === undefined || args === '') {    
       return value;
    };

    let filter = args[0].toLocaleString().toLocaleLowerCase()    
    return value.filter(      
      
      (v:any) => v.toLocaleLowerCase().includes(filter) != -1
    );
  }

}
