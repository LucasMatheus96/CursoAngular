import { Subscription } from 'rxjs';
import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';
  mostrarMenu: boolean = false;

  constructor(private authService:AuthService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar: any) => this.mostrarMenu = mostrar)
    }
}
