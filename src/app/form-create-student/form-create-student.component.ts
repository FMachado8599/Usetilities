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
  get name(){
    return this.newStudentForm.get('name');
  }
  get isNameValid(){
    return this.name?.touched && this.name?.valid;
  }
  get lastName(){
    return this.newStudentForm.get('lastName');
  }
  get isLastNameValid(){
    return this.lastName?.touched && this.lastName?.valid;
  }
  get ci(){
    return this.newStudentForm.get('ci');
  }
  get isCiValid(){
    return this.ci?.touched && this.ci?.valid;
  }
}

