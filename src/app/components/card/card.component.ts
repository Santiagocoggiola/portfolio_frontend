import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() logoUrl: string = '';
  @Input() title: string = 'Universidad Blas Pascal';
  @Input() position: string = '';
  @Input() from: string = '2013';
  @Input() to: string = '2015';
  @Input() content: string = 'Computer Engeniring';
}
