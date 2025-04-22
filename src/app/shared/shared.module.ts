import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStudentFormComponent } from './components/new-student-form/new-student-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NewStudentFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    NewStudentFormComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule { }
