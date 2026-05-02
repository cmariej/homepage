import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // FormBuilder hinzugefügt
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/message';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [Message, InputText, Textarea, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true,
})
export class Contact {
  messageService = inject(MessageService);
  fb = inject(FormBuilder); // FormBuilder injiziert
  contactForm: FormGroup;
  formSubmitted: boolean = false;
  isSubmitting: boolean = false;
  submitSuccess: boolean = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
        this.isSubmitting = true;
        this.submitSuccess = false;
        emailjs.send(
            'service_39zvsce',
            'template_gcuvzz9',
            {
                name: this.contactForm.value.name,
                email: this.contactForm.value.email,
                message: this.contactForm.value.message,
            },
            'N2VyJjNZ-6ixZ6vHf'
        ).then(() => {
            this.submitSuccess = true;
            this.contactForm.reset();
            this.formSubmitted = false;
            this.isSubmitting = false;
        }).catch(() => {
            this.isSubmitting = false;
        });
      }
  }

  isInvalid(controlName: string) {
    const control = this.contactForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }
}

// https://dashboard.emailjs.com/admin
// templateID: template_gcuvzz9
// serviceID: service_39zvsce
// publicKey: N2VyJjNZ-6ixZ6vHf