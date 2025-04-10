import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: [''],
      lastName: [''],
      ci: [null],
      location: [''],
      birth: [null],
    });
  }

  public submit(){
    if (this.newStudentForm.valid) {
      console.log(this.newStudentForm.value);
    }
  }
}

