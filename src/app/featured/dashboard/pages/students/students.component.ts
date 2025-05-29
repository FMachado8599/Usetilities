import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectStudents, selectStudentsLoading, selectStudentsError } from './store/student.selectors';
import { StudentsActions } from './store/student.actions';

import { Student } from '../../../../core/interfaces/students-interface';
import { Course } from '../../../../core/interfaces/courses-interface';
import { CoursesService } from '../../../../core/services/courses.service';


@Component({
  selector: 'information-display-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent implements OnInit {

  avatarPlaceholder: string = "/assets/png/avatar_placeholder_white.png";

  students$: Observable<Student[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  showForm: boolean = false;
  public students: Student[] = [];
  public courses: Course[] = [];

  constructor(
    private store: Store,
    private coursesService: CoursesService
  ) {
    this.students$ = this.store.select(selectStudents);
    this.loading$ = this.store.select(selectStudentsLoading);
    this.error$ = this.store.select(selectStudentsError);
  }

  ngOnInit(): void {
    this.store.dispatch(StudentsActions.loadStudents());

    this.coursesService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }


  loadStudents() {
    this.store.dispatch(StudentsActions.loadStudents());
  }

  deleteStudent(id: string) {
    this.store.dispatch(StudentsActions.deleteStudent({ id }));
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
