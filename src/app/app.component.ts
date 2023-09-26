import { Component } from '@angular/core';
import { ThemeserviceService } from './themeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  constructor(public themeservice: ThemeserviceService) {}

  title = 'FLYR';
}
