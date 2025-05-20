import { Component } from '@angular/core';
import { Student } from '../../../../core/interfaces/students-interface';
import { Course } from '../../../../core/interfaces/courses-interface';
import { StudentsService } from '../../../../core/services/students.service';
import { CoursesService } from '../../../../core/services/courses.service';

@Component({
  selector: 'information-display-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {

  constructor(private studentsService: StudentsService, private coursesService: CoursesService) {}
 
  avatarPlaceholder: string = "/assets/png/avatar_placeholder_white.png";

  public students: Student[] = []
  public courses: Course[] = [];

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
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

  onAddStudent() {
    this.showForm = true;
  }
  onFormSubmitted() {
    this.showForm = false;
  }

}
