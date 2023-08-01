import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/domain/types';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { Dialog } from '@angular/cdk/dialog'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class CardContainerComponent implements OnInit{
  @Input() title:string = ''; 
  @Input() cards : Card[] = [];
  @Input() isLoggedIn = false;
  displayModal = false;

  constructor(public dialog: Dialog) {

  }

  ngOnInit(): void {
    
  }
  

  // Resto del código

  openEditModal(): void {
    this.displayModal = true;
  }

  openDeleteModal(): void {
    
  }

  onCancelModal(): void {
    this.displayModal = false;
  }

  // Función para mostrar el modal para agregar una nueva card
  onSaveCard(card : Card){
    this.cards.push(card);
  }
}