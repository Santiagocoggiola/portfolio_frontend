import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { Card } from 'src/app/domain/types';

@Component({
  selector: 'app-card-edit-modal',
  templateUrl: './card-edit-modal.component.html',
  styleUrls: ['./card-edit-modal.component.css']
})
export class CardEditModalComponent implements OnInit {
  @Input() displayModal = false;
  @Input() isEditing = false; 
  @Input() cardToEdit: Card = {}; 

  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  editForm: FormGroup = new FormGroup({});

  responsiveClass = '';

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.updateResponsiveClass();
    window.addEventListener('resize', () => {
      this.updateResponsiveClass();
    });

    this.editForm = this.formBuilder.group({
      title: [this.isEditing ? this.cardToEdit.title : '', Validators.required],
      position: [this.isEditing ? this.cardToEdit.position : '', Validators.required],
      from: [this.isEditing ? this.cardToEdit.from : '', Validators.required],
      to: [this.isEditing ? this.cardToEdit.to : ''],
      content: [this.isEditing ? this.cardToEdit.content : '', Validators.required],
    });
  }

  onCancelClick(): void {
    this.onCancel.emit();
  }

  onSaveClick(): void {
    if (this.editForm.valid) {
      this.onSave.emit(this.editForm.value);
    }
  }

  onFileSelected(event: any): void {
    // Implement your logic to handle file upload here
    // You can access the selected file from the event
  }

  updateResponsiveClass(): void {
    if (window.innerWidth <= 768) {
      this.responsiveClass = 'p-grid-responsive';
    } else {
      this.responsiveClass = '';
    }
  }
}
