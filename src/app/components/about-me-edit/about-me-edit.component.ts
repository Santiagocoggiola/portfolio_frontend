import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AboutMe } from 'src/app/domain/types'; // Reemplaza 'AboutMe' por el tipo real de tu objeto

@Component({
  selector: 'app-about-me-edit',
  templateUrl: './about-me-edit.component.html',
  styleUrls: ['./about-me-edit.component.css']
})
export class AboutMeEditComponent implements OnInit {
  @Input() displayModal = false;
  @Input() aboutMe: AboutMe = {}; // Reemplaza 'AboutMe' por el tipo real de tu objeto

  @Output() onSave = new EventEmitter<AboutMe>(); // Reemplaza 'AboutMe' por el tipo real de tu objeto
  @Output() onCancel = new EventEmitter<void>();

  editForm: FormGroup = new FormGroup({});
  imageUrl: string | undefined;
  fileLoaded = false;
  loading = false;
  responsiveClass = '';

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
    this.updateResponsiveClass();
    window.addEventListener('resize', () => {
      this.updateResponsiveClass();
    });

    this.updateForm();

    this.imageUrl = this.aboutMe.imgUrl || undefined;
  }

  updateForm(): void {
    this.editForm = this.formBuilder.group({
      title: [this.aboutMe.title || '', Validators.required],
      content: [this.aboutMe.content || '', Validators.required],
      file: [null],
    });
  }

  onCancelClick(): void {
    this.onCancel.emit();
  }

  onSaveClick(): void {
    this.loading = true;
    if (this.editForm.valid) {
      // Check if a new image file is selected and update the imageUrl
      const fileControlValue = this.editForm.get('file')?.value;
      if (fileControlValue) {
        // Implement your logic to upload the new image and get the URL
        // For now, I'll assume you have a function called uploadImage() that returns the URL
        this.imageUrl = this.uploadImage(fileControlValue);
      }

      setTimeout(() => {
        this.loading = false;
        this.onSave.emit({ ...this.aboutMe, ...this.editForm.value, imgUrl: this.imageUrl });
      }, 2000);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill all the required fields.'
      });
    }
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

  uploadImage(fileControlValue: any): string | undefined {
    return ''; // Implementa tu lógica para cargar la imagen y obtener la URL
  }

  fileSizeIntoMB(fileSize: any) {
    return (Math.round((fileSize / 1024 / 1024) * 100) / 100) + ' MB';
  }

}
