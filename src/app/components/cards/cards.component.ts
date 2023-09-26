import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {

  // variables de entrada al componente

  @Input() city?: string ;
  @Input() classtype?: string ;
  @Input() from?: string ;
  

}
