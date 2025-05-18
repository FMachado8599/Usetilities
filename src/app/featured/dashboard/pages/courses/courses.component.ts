import { Component } from '@angular/core';
import { CoursesService, Course } from './services/courses.service';

@Component({
  selector: 'information-display-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  constructor(private coursesService: CoursesService) { };

}
