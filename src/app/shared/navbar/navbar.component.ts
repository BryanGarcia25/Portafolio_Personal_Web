import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public menuNavbar = routes.map(route => route).flat().filter(route => route.path).filter(route => route.title);
  public icon = faSun;

  changeBackgroundColor() {
    document.body.style.transition = '.55s';

    if (document.body.getAttribute("data-bs-theme") == 'dark') {
      document.body.setAttribute("data-bs-theme", "light");
      this.icon = faMoon;
      document.getElementsByClassName('navbar')[0].classList.remove('bg-dark');
      document.getElementsByClassName('navbar')[0].classList.toggle('bg-white');
    } else {
      document.body.setAttribute("data-bs-theme", "dark");
      this.icon = faSun;
      document.getElementsByClassName('navbar')[0].classList.remove('bg-white');
      document.getElementsByClassName('navbar')[0].classList.toggle('bg-dark');
    }
  }
}
