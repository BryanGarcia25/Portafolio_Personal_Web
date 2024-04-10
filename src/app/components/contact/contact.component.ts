import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  public iconEmail = faEnvelope;
}
