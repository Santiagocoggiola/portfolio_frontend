import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Footer } from 'src/app/domain/types';

@Component({
  selector: 'app-footer-edit',
  templateUrl: './footer-edit.component.html',
  styleUrls: ['./footer-edit.component.css']
})
export class FooterEditComponent {
  @Input() displayModal = false;
  @Input() footer: Footer = {}; 

  @Output() onSave = new EventEmitter<Footer>(); 
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
  }

  updateForm(): void {
    this.editForm = this.formBuilder.group({
      gitHubUrl: [this.footer.gitHubUrl || '', Validators.required],
      linkedInUrl: [this.footer.linkedInUrl || '', Validators.required],
    });
  }

  onCancelClick(): void {
    this.onCancel.emit();
  }

  onSaveClick(): void {
    this.loading = true;
    if (this.editForm.valid) {
      setTimeout(() => {
        this.loading = false;
        this.onSave.emit({ ...this.footer, ...this.editForm.value,});
      }, 2000);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill all the required fields.'
      });
    }
  }


  updateResponsiveClass(): void {
    if (window.innerWidth <= 768) {
      this.responsiveClass = 'p-grid-responsive';
    } else {
      this.responsiveClass = '';
    }
  }
}
