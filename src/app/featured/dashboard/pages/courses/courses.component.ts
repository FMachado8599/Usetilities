import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../core/interfaces/courses-interface';
import { CoursesService } from '../../../../core/services/courses.service';

@Component({
  selector: 'information-display-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
  ) {}

  public courses: Course[] = [];

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  getCourseName(id: number): string {
    const course = this.courses.find(c => c.id === id);
    return course ? course.name : 'N/A';
  }

  // SHOW-HIDE Form------------------------//
  showForm: boolean = false;

  onAddCourse() {
    this.showForm = true;
  }

  onFormSubmitted() {
    this.showForm = false;
  }

}

