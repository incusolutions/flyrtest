import { Component } from '@angular/core';
import { ThemeserviceService } from 'src/app/themeservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  constructor(public themeservice: ThemeserviceService) {}
}
