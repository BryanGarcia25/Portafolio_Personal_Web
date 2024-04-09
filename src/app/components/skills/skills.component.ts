import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { Tecnology } from '../../interfaces/tecnology_interface';
import { TecnologiesService } from '../../services/tecnologies.service';

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
  public tecnologiesService: TecnologiesService = inject(TecnologiesService);

  constructor() {
    this.tecnologiesService.getTecnologies().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        this.tecnologiesList.push(res[index]);
      }
      this.sortTecnologiesList();
    })
  }

  sortTecnologiesList() {
    this.tecnologiesList.sort((a,b) => {
      return b.category.localeCompare(a.category)
    });
  }
}
