import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { correctCI } from '../utils/custom-validators';

@Component({
  selector: 'app-form-create-student',
  standalone: false,
  templateUrl: './form-create-student.component.html',
  styleUrl: './form-create-student.component.scss'
})
export class FormCreateStudentComponent {

  public newStudentForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.newStudentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      ci: [null, [Validators.required, correctCI]],
      location: [''],
      birth: [null, [Validators.required]],
    });
  }

  public submit(){
    if (this.newStudentForm.valid) {
      console.log(this.newStudentForm.value);
    }
  }
  get nameControl(){
    return this.newStudentForm.get('name');
  }
  get isNameInvalid(){
    return this.nameControl?.touched && this.nameControl?.invalid;
  }
  get lastNameControl(){
    return this.newStudentForm.get('lastName');
  }
  get isLastNameInvalid(){
    return this.lastNameControl?.touched && this.lastNameControl?.invalid;
  }
  get ciControl(){
    return this.newStudentForm.get('ci');
  }
  get isCiInvalid(){
    return this.ciControl?.touched && this.ciControl?.invalid;
  }
}

