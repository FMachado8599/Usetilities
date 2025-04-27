import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { correctCI } from '../../../utils/custom-validators';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-student-form',
  standalone: false,
  templateUrl: './new-student-form.component.html',
  styleUrl: './new-student-form.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NewStudentFormComponent {

  public newStudentForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.newStudentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
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
