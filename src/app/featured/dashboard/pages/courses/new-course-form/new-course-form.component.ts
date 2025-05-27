import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CoursesService } from '../../../../../core/services/courses.service';
import { Course } from '../../../../../core/interfaces/courses-interface';

@Component({
  selector: 'dashboard-new-course-form',
  standalone: false,
  templateUrl: './new-course-form.component.html',
  styleUrl: './new-course-form.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NewCourseFormComponent {

  @Output() submitted = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  public newCourseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService
  ) {
    this.newCourseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      field: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.minLength(20), Validators.maxLength(400)]],
    });
  }



  public submit(){
    if (this.newCourseForm.valid) {
      this.coursesService.getCourses().subscribe((courses) => {
        const maxId = Math.max(...courses.map(c => c.id), 0);
        const newId = maxId + 1;

        const newCourse: Course = {
          id: newId,
          name: this.newCourseForm.value.name,
          field: this.newCourseForm.value.field,
          description: this.newCourseForm.value.description
        };

        this.coursesService.addCourse(newCourse).subscribe(() => {
          this.submitted.emit();
          this.newCourseForm.reset();
        });
      });
    }
  }
  
  onCancelled(){
    this.newCourseForm.reset();
    this.cancelled.emit();
  }

  get nameControl(){
    return this.newCourseForm.get('name');
  }
  get isNameInvalid(){
    return this.nameControl?.touched && this.nameControl?.invalid;
  }
  get idControl(){
    return this.newCourseForm.get('field');
  }
  get isIdInvalid(){
    return this.idControl?.touched && this.idControl?.invalid;
  }
}
