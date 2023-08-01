import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { Card } from 'src/app/domain/types';
import { MessageService } from 'primeng/api';


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

  imageUrl: string | undefined;

  fileLoaded : boolean = false;

  editForm: FormGroup = new FormGroup({});

  loading = false;

  responsiveClass = '';

  constructor(private formBuilder: FormBuilder,
    private messageService: MessageService) {
    
  }

  ngOnInit() {
    this.updateResponsiveClass();
    window.addEventListener('resize', () => {
      this.updateResponsiveClass();
    });

    this.updateForm();

    this.imageUrl = this.isEditing ? this.cardToEdit.logoUrl : undefined;
    
  }

  updateForm(): void {
    this.editForm = this.formBuilder.group({
      title: [this.isEditing ? this.cardToEdit.title : '', Validators.required],
      position: [this.isEditing ? this.cardToEdit.position : '', Validators.required],
      from: [this.isEditing ? this.cardToEdit.from : '', Validators.required],
      to: [this.isEditing ? this.cardToEdit.to : ''],
      content: [this.isEditing ? this.cardToEdit.content : '', Validators.required],
      file: [null, this.isEditing ? null : Validators.required], // Agregamos el campo file al formulario
    });
  }

  onCancelClick(): void {
    this.onCancel.emit();
  }

  onSaveClick(): void {
    this.loading = true;
    if (this.editForm.valid) {
      const fromControlValue = this.editForm.get('from')?.value;
      const toControlValue = this.editForm.get('to')?.value;
  
      if (!fromControlValue || !toControlValue) {
        this.messageService.add({
          severity: 'error',
          summary: 'Validation Error',
          detail: 'Please fill all the required fields.'
        });
        return;
      }
  
      // Check if a new image file is selected
      const fileControlValue = this.editForm.get('file')?.value;
      if (!this.isEditing && !fileControlValue) {
        this.messageService.add({
          severity: 'error',
          summary: 'Validation Error',
          detail: 'Please upload an image for the new card.'
        });
        return;
      }
  
      // Check if a new image file is selected, and update the imageUrl
      if (fileControlValue) {
        // Implement your logic to upload the new image and get the URL
        // For now, I'll assume you have a function called uploadImage() that returns the URL
        this.imageUrl = this.uploadImage(fileControlValue);
      }
  
      setTimeout(() => {
        // Resto del código después de la simulación del backend
        this.loading = false; // Ocultar el spinner
      }, 2000);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill all the required fields.'
      });
    }
  }

  uploadImage(fileControlValue : any) : string | undefined {
    return '';
  }

  onFileSelected(event: any): void {
    this.fileLoaded = true;
    this.editForm.patchValue({
      file: event.currentFiles[0] 
    });
  }

  updateResponsiveClass(): void {
    if (window.innerWidth <= 768) {
      this.responsiveClass = 'p-grid-responsive';
    } else {
      this.responsiveClass = '';
    }
  }

  validateFileType(files: File[]): boolean {
    for (const file of files) {
      const fileType = file.type;
      if (!fileType || (fileType !== 'image/png' && fileType !== 'image/svg+xml')) {
        return false;
      }
    }
    return true;
  }

  fileSizeIntoMB(fileSize : any){
    return (Math.round((fileSize/1024/1024) * 100) / 100) + ' MB';
 }
  
}
