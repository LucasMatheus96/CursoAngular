import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { observable, Observable } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
      ): Observable<boolean>|boolean {
        
        console.log(route)
        console.log(state)

        if (state.url.includes('editar')){
            alert('usuario sem acesso')
            return false; 
        }
        console.log('guarda de rota filha')
       return true;
    
      };
}