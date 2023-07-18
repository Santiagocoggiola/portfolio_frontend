import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/domain/types';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { Dialog } from '@angular/cdk/dialog'

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit{
  @Input() title:string = ''; 
  @Input() cards : Card[] = [];
  displayModal = false;
  isLoggedIn = true; // Aquí debes establecer el valor de isLoggedIn según tus necesidades

  constructor(public dialog: Dialog) {

  }

  ngOnInit(): void {
    console.log(this.cards)
  }
  

  // Resto del código

  openEditModal(): void {
    this.displayModal = true;
  }

  onCancelModal(): void {
    this.displayModal = false;
  }

  // Función para mostrar el modal para agregar una nueva card
  onSaveCard(card : Card){
    this.cards.push(card);
  }
}