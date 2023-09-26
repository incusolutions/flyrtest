import { Component } from '@angular/core';
import { ThemeserviceService } from 'src/app/themeservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {

  // se inyecta servicio
  constructor(public themeservice: ThemeserviceService) {}


  // se ecarga de mostrar y el menu movil
  tooglemobile(){
    this.themeservice.mobilemenu = !this.themeservice.mobilemenu;
    // para cargar nuevamente los datos del menu inicial en el movil
    if(!this.themeservice.mobilemenu){
        this.themeservice.loadmenu();
    }
  }

  
}
