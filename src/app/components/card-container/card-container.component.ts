import { Component, Input } from '@angular/core';
import { Card } from 'src/app/domain/types';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {
  @Input() title:string = ''; 
  cards: Card[] = [
    {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/UBP_V_D_1-m.png',
      title: 'Universidad ABC',
      position: 'Licenciatura en Educación',
      from: '2010',
      to: '2014',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper convallis tortor non pretium.'
    },
    {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/UBP_V_D_1-m.png',
      title: 'Instituto XYZ',
      position: 'Técnico en Informática',
      from: '2008',
      to: '2010',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper convallis tortor non pretium.'
    },
    {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/UBP_V_D_1-m.png',
      title: 'Escuela DEF',
      position: 'Bachiller en Ciencias',
      from: '2005',
      to: '2008',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper convallis tortor non pretium.'
    }
  ];

  cardRows: Card[][] = []; 

  constructor() {
    this.cardRows = this.chunkArray(this.cards, 3); 
    console.log(this.cardRows)
  }

  chunkArray(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

}
