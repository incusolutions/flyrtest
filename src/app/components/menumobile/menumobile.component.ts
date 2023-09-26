import { Component } from '@angular/core';
import { ThemeserviceService } from 'src/app/themeservice.service';

@Component({
  selector: 'app-menumobile',
  templateUrl: './menumobile.component.html',
  styleUrls: ['./menumobile.component.sass']
})
export class MenumobileComponent {

  constructor(public themeservice: ThemeserviceService) {}


  changelinks(link:string){
    this.themeservice.tilelink = link
    this.themeservice.menumobileroot = this.themeservice.submenumobileinfo;
  }
}
