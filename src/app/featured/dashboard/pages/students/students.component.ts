import { Component, OnInit } from '@angular/core';
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

export class StudentsComponent implements OnInit {

  constructor(private studentsService: StudentsService, private coursesService: CoursesService) {}
 
  avatarPlaceholder: string = "/assets/png/avatar_placeholder_white.png";

  public students: Student[] = []
  public courses: Course[] = [];

  loadStudents() {
    this.studentsService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

  ngOnInit(): void {
    this.loadStudents();

    this.coursesService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }

  deleteStudent(id: string) {
    this.studentsService.deleteStudent(id).subscribe(() => {
      this.students = this.students.filter(student => student.id !== id);
    });
  }

  getStudentCoursesNames(student: Student): string {
    if (!student.courses || student.courses.length === 0) {
      return 'N/A';
    }

    const matchedCourses = this.courses.filter(course =>
      student.courses!.some(courseId => Number(courseId) === Number(course.id))
    );

    if (matchedCourses.length === 0) {
      return 'N/A';
    }

    return matchedCourses.map(course => course.name).join(', ');
  }

  getStudentCourses(student: Student): number[] {
    return student.courses ?? [];
  }


  // SHOW-HIDE Form------------------------//
  showForm: boolean = false;

  onAddStudent() {
    this.showForm = true;
  }
  onFormSubmitted() {
    this.showForm = false;
    setTimeout(() => {
      this.loadStudents(); // esperar antes de pedir de nuevo
    }, 500);
  }
  onCancelled(){
    this.showForm = false;
  }

}
