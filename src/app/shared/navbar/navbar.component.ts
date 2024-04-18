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
  public iconMode = faSun;
  public pathActive: string = "";

  constructor () {
    if (window.location.pathname == '/') {
      this.pathActive = "home";
    } else {
      this.pathActive = window.location.pathname.replace("/", "");
    }
  }

  changeBackgroundColor() {
    const navbarClass = document.getElementsByClassName('navbar');
    const body = document.body;
    body.style.transition = '.55s';

    if (body.getAttribute("data-bs-theme") == 'dark') {
      this.iconMode = faMoon;
      body.setAttribute("data-bs-theme", "light");
      navbarClass[0].classList.remove('bg-dark');
      navbarClass[0].classList.toggle('bg-white');
    } else {
      this.iconMode = faSun;
      body.setAttribute("data-bs-theme", "dark");
      navbarClass[0].classList.remove('bg-white');
      navbarClass[0].classList.toggle('bg-dark');
    }

  }

  navLinkSelected(nameSection: any) {
    const navLinksClass = document.getElementsByClassName('nav-link');
    for (let index = 0; index < navLinksClass.length; index++) {

      if (navLinksClass[index].classList.contains('active')) {
        navLinksClass[index].classList.remove('active');
      }

      if (navLinksClass[index].innerHTML == nameSection) {
        navLinksClass[index].classList.add('active');
      }
      
    }
  }

}
