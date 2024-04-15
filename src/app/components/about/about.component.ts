import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleRight, faBriefcase, faDrawPolygon, faDumbbell, faFilm, faGamepad, faGraduationCap, faMusic, faPen, faWalking } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  public iconJob = faBriefcase;
  public iconVideogame = faGamepad;
  public iconDraw = faPen;
  public iconMusic = faMusic;
  public iconMovies = faFilm;
  public iconExercise = faDumbbell;
  public iconWalk = faWalking;

  public iconArrow = faArrowAltCircleRight;
}
