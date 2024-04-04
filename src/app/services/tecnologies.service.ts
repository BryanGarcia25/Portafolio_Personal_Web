import { Injectable, inject } from '@angular/core';
import { Tecnology } from '../interfaces/tecnology_interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TecnologiesService {
  urlJson = 'http://localhost:3000/tecnologies';
  private httpClient = inject(HttpClient);

  getTecnologies() {
    return this.httpClient.get<Tecnology[]>(this.urlJson);
  }

  constructor() { }
}
