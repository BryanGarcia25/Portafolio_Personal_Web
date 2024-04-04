import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export default class SkillsComponent {
  public menuSkills = routes.map(route => route.children).flat().filter(route => route?.path);
}
