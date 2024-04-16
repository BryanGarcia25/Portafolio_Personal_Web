import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import emailjs from '@emailjs/browser';
import connectionEmailService from '../../connection_emailjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  sendEmailSuccess: any;

  formContact: FormGroup = this.formBuilder.group({
    name: ["", Validators.required],
    last_name: ["", Validators.required],
    to_name: "Bryan Garcia",
    from_email: ["", Validators.required],
    message: ["", Validators.required],
  })

  constructor(private formBuilder: FormBuilder) { }

  validateForm(): boolean {
    return this.sendEmailSuccess = this.formContact.valid == true ? true : false;
  }

  sendEmail() {
    if (this.validateForm()) {
      emailjs.init(connectionEmailService.PUBLIC_KEY);
      emailjs.send(connectionEmailService.SERVICE_ID, connectionEmailService.TEMPLATE_ID, {
        from_name: this.formContact.value.name + " " + this.formContact.value.last_name,
        to_name: this.formContact.value.to_name,
        from_email: this.formContact.value.from_email,
        subject: "",
        message: this.formContact.value.message,
      }).then((resp) => {

      }, (err) => {

      })
    }
  }
}
