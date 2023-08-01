import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Card } from 'src/app/domain/types';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() card: Card = {};
  @Input() isLoggedIn = false;
  displayModal = false;

  ngOnInit() {}

  openEditModal(): void {
    this.displayModal = true;
  }

  openDeleteModal(): void {
  
  }

  onCancelModal(): void {
    this.displayModal = false;
  }

  onSaveCard(updatedCardData: any): void {
    this.card.title = updatedCardData.title;
    this.card.position = updatedCardData.position;
    this.card.from = updatedCardData.from;
    this.card.to = updatedCardData.to;
    this.card.content = updatedCardData.content;

    // Lógica para manejar la carga de archivos (upload) si lo deseas

    this.displayModal = false;
  }
}
