import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { Tecnology } from '../../interfaces/tecnology_interface';
import { tecnologies } from '../../interfaces/tecnologies'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export default class SkillsComponent {
  public menuSkills = routes.map(route => route.children).flat().filter(route => route?.path);

  public tecnologiesList: Tecnology[] = [];

  constructor() {
    this.tecnologiesList = tecnologies;
  }
}
