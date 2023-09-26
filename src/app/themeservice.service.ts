import { Injectable } from '@angular/core';
import { Menu } from './interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {

  constructor() { }

  // controla estado del menu movil, se activa cuando hacen clic
  mobilemenu:boolean=false;

  // datos menu raiz, se creea interfaz con datos del menu
  menumobileroot:Menu [] = [
   {
      url:'#',
      title:'Check-in'
   },
   {
    url:'#',
    title:'Manage my booking'
    },
    {
      url:'#',
      title:'Information'
    }

  ]

  // datos submenu 
  submenumobileinfo:Menu [] = [
    {url:'#',title:'Help center' },
    {url:'#',title:'Flight state' },
    {url:'#',title:'Airplanes' },
    {url:'#',title:'Routes' }
    
 
  ]

  tilelink:string=''

  // funcion que formatea al estado inicial el menu
  loadmenu(){
    this.tilelink='';
    this.menumobileroot = [
      {
         url:'#',
         title:'Check-in'
      },
      {
       url:'#',
       title:'Manage my booking'
       },
       {
         url:'#',
         title:'Information'
       }
      ]
   
     
}

  


}
