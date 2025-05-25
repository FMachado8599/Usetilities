import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CoursesService } from '../../../../../core/services/courses.service';
import { Course } from '../../../../../core/interfaces/courses-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  standalone: false,
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.scss'
})
export class CourseEditComponent implements OnInit{
  
  @Output() cancelled = new EventEmitter<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private coursesService: CoursesService,
  ) {}

  course: Course | null = null;
  editCourseForm!: FormGroup;
  courseId!: number;

  ngOnInit(): void {
    
    this.editCourseForm = this.fb.group({
      name: ['', Validators.required],
      field: ['', Validators.required],
      description: ['', Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID recibido:', id);
    if (id) {
      this.courseId = +id;
      this.coursesService.getCourseById(this.courseId).subscribe(course => {
        this.course = course
        this.editCourseForm.patchValue({
          name: course.name,
          field: course.field,
          description: course.description,
        });
      });
    }
  }


  onSubmit() {
    if (this.editCourseForm.valid) {
      const updatedCourse: Course = {
        ...this.editCourseForm.value,
        id: this.courseId
      };

      this.coursesService.updateCourse(updatedCourse).subscribe(() => {
        this.router.navigate(['/dashboard/courses']);
      });
    } else {
      this.editCourseForm.markAllAsTouched();
    }
  }

  onCancelled() {
    this.editCourseForm.reset();
    this.router.navigate(['/dashboard/courses']);
  }

}
