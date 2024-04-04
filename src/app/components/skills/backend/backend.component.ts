import { Component, inject } from '@angular/core';
import { Tecnology } from '../../../interfaces/tecnology_interface';
import { TecnologiesService } from '../../../services/tecnologies.service';

@Component({
  selector: 'app-backend',
  standalone: true,
  imports: [],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.css'
})
export default class BackendComponent {
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
