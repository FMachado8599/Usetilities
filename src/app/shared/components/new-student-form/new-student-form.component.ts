import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { correctCI } from '../../../utils/custom-validators';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StudentsService, Student } from '../../../featured/dashboard/students/services/students.service';


@Component({
  selector: 'app-new-student-form',
  standalone: false,
  templateUrl: './new-student-form.component.html',
  styleUrl: './new-student-form.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewStudentFormComponent {

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

  public submit(){
    console.log("bbbbbbbb")
    if (this.newStudentForm.valid) {
      console.log("aaaaaa")
      const newStudent: Student = {
        name: this.newStudentForm.value.name,
        lastName: this.newStudentForm.value.lastName,
        ci: this.newStudentForm.value.ci,
        location: this.newStudentForm.value.location,
        birth: this.newStudentForm.value.birth,
      };

      this.studentsService.addStudent(newStudent); // agregás al servicio
      console.log(newStudent);
      console.log('Student added successfully:', newStudent);
  
      this.newStudentForm.reset(); // opcional: limpiar el form después de agregar
    } else {
      this.newStudentForm.markAllAsTouched(); // opcional: marcar campos en rojo si alguien aprieta "Submit" sin completar
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
