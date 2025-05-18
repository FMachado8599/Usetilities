import { Component } from '@angular/core';
import { StudentsService, Student } from './services/students.service';
import { CoursesService, Course } from '../courses/services/courses.service';

@Component({
  selector: 'information-display-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {
 
  avatarPlaceholder: string = "/assets/png/avatar_placeholder_white.png";

  public students: Student[] = []
  public courses: Course[] = [];

  constructor(
    private studentService: StudentsService,
    private coursesService: CoursesService
  ) { };

  ngOnInit() {
    this.students = this.studentService.students;
    this.courses = this.coursesService.courses;
  }

  getCourseName(id: number): string {
    const course = this.courses.find(c => c.id === id);
    return course ? course.name : 'N/A';
  }

  // SHOW-HIDE Form------------------------//
  showForm: boolean = false;

  onAddStudent() {
    this.showForm = true;
  }
  onFormSubmitted() {
    console.log("Se creó un nuevo estudiante, CERRANDO FORM");
    this.showForm = false;
  }

}
