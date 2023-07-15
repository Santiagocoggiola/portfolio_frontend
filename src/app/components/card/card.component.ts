import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() logoUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/5/58/UBP_V_D_1-m.png';
  @Input() title: string = 'Universidad Blas Pascal';
  @Input() position: string = 'Computer Engeniring';
  @Input() from: string = '2013';
  @Input() to: string = '2015';
  @Input() content: string = '';
}
