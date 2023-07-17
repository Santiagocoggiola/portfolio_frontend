import { Component, Input } from '@angular/core';
import { Card } from 'src/app/domain/types';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { Dialog } from '@angular/cdk/dialog'

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
  constructor(public dialog: Dialog) {

  }

  isLoggedIn = true; // Aquí debes establecer el valor de isLoggedIn según tus necesidades

  // Resto del código

  // Función para mostrar el modal para agregar una nueva card
  showAddCardModal(): void {
    const dialogRef = this.dialog.open(CardEditModalComponent, {
      width: '90vw',
      data: {
        isEditing: false // Establecemos isEditing en false para agregar una nueva card
      }
    });

    // Escuchar el evento onSave del modal para guardar la nueva card
    dialogRef.closed.subscribe((newCardData) => {
      // Aquí puedes guardar la nueva card en tu lista de cards
      // newCardData contendrá los datos del formulario del modal
      if (newCardData) {
        // Solo si el usuario hizo clic en el botón "Save" en el modal, newCardData contendrá los datos.
        // Puedes agregar la nueva card a la lista de cards o hacer cualquier otra operación necesaria.
        this.cards.push(newCardData);
      }
    });
  }
}