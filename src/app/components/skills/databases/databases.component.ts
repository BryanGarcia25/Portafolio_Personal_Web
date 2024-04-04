import { Component, inject } from '@angular/core';
import { TecnologiesService } from '../../../services/tecnologies.service';
import { Tecnology } from '../../../interfaces/tecnology_interface';

@Component({
  selector: 'app-databases',
  standalone: true,
  imports: [],
  templateUrl: './databases.component.html',
  styleUrl: './databases.component.css'
})
export default class DatabasesComponent {
  public tecnologiesList: Tecnology[] = [];
  public tecnologiesService: TecnologiesService = inject(TecnologiesService);

  constructor() {
    this.tecnologiesService.getTecnologies().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        this.tecnologiesList.push(res[index]);
      }

      console.log(this.tecnologiesList);
    })
  }
}
