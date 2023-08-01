import { Component } from '@angular/core';
import { Card } from 'src/app/domain/types';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  constructor(private dataSharingService: DataSharingService){}
  isLoggedIn : boolean = false;
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
  ngOnInit(){
    this.isLoggedIn = this.dataSharingService.getLoggedIn();
  }
}
