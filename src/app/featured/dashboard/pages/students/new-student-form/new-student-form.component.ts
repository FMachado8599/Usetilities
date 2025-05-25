import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { correctCI } from '../../../../../utils/custom-validators';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StudentsService } from '../../../../../core/services/students.service';
import { Student } from '../../../../../core/interfaces/students-interface';


@Component({
  selector: 'app-new-student-form',
  standalone: false,
  templateUrl: './new-student-form.component.html',
  styleUrl: './new-student-form.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class NewStudentFormComponent {

  @Output() submitted = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  public newStudentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService
  ) {
    this.newStudentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      ci: [null, [Validators.required, correctCI]],
      location: [''],
      birth: [null, [Validators.required]],
    });
  }

  public submit() {
  if (this.newStudentForm.valid) {
    const formValue = {
      ci: this.newStudentForm.value.ci,
      name: this.newStudentForm.value.name,
      lastName: this.newStudentForm.value.lastName,
      location: this.newStudentForm.value.location,
      birth: this.newStudentForm.value.birth,
    };

    const newStudent: Omit<Student, 'id'> = {
      ...formValue,
      courses: [],
    };

    this.studentsService.addStudent(newStudent).subscribe(() => {
      this.submitted.emit();
      this.newStudentForm.reset();
    });
  } else {
    this.newStudentForm.markAllAsTouched();
  }
}

  onCancelled(){
    this.newStudentForm.reset();
    this.cancelled.emit();
  }


  get nameControl(){
    return this.newStudentForm.get('name');
  }
  get isNameInvalid(){
    return this.nameControl?.touched && this.nameControl?.invalid;
  }
  get lastnameControl(){
    return this.newStudentForm.get('lastName');
  }
  get isLastnameInvalid(){
    return this.lastnameControl?.touched && this.lastnameControl?.invalid;
  }
  get ciControl(){
    return this.newStudentForm.get('ci');
  }
  get isCiInvalid(){
    return this.ciControl?.touched && this.ciControl?.invalid;
  }
}
