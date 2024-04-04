import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public menuNavbar = routes.map(route => route).flat().filter(route => route.path).filter(route => route.title);
}
