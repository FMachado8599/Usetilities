import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../../../../core/interfaces/students-interface';
import { StudentsService } from '../../../../../core/services/students.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../../../../../core/services/courses.service';
import { Course } from '../../../../../core/interfaces/courses-interface';

@Component({
  selector: 'dashboard-student-edit',
  standalone: false,
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.scss'
})
export class StudentEditComponent implements OnInit {

    constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private coursesService: CoursesService,
  ) {}

  student: Student | null = null;
  studentForm!: FormGroup;
  studentId!: string;

  _courses: Course[] = [];
  public allCourses: Course[] = [];
  public studentCourses: Course[] = [];

  loadCourses() {
    this.coursesService.getCourses().subscribe((courses) => {
      this._courses = courses;
    });
  }

  removeCourseFromStudent(courseId: number): void {
    console.log('Intentando eliminar curso con ID:', courseId);
    if (!this.student) {
      console.warn('El estudiante no está definido aún.');
      return;
    }
  }

  ngOnInit(): void {
    this.loadCourses();
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      ci: ['', Validators.required],
      location: ['', Validators.required],
      birth: ['', Validators.required],
      avatar: [''],
      score: [null],
      presenteeism: [null],
      bio: [''],
      online: [false],
      courses: [[]],
    });
  
    this.studentId = this.route.snapshot.paramMap.get('id')!;
    this.studentsService.getStudentById(this.studentId).subscribe((student) => {
      this.student = student;
      this.studentForm.patchValue({
        ci: student.ci,
        name: student.name,
        lastName: student.lastName,
        location: student.location,
        birth: student.birth ? this.formatDateForInput(student.birth) : '',
        avatar: student.avatar,
        score: student.score,
        presenteeism: student.presenteeism,
        bio: student.bio,
        online: student.online,
        courses: student.courses,
      });

      this.coursesService.getCourses().subscribe((courses) => {
        this.allCourses = courses;
        this.studentCourses = courses.filter(course =>
          student.courses?.includes(course.id)
        );
      });
    });

    
  }

  private formatDateForInput(date: string | Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

    onSubmit() {
    if (this.studentForm.valid) {
      const updatedStudent: Student = {
        ...this.studentForm.value,
        id: this.studentId,
      };

      this.studentsService.updateStudent(updatedStudent).subscribe(() => {
        console.log('Estudiante actualizado correctamente');
      });
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
}