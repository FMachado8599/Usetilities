import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStudentFormComponent } from './components/new-student-form/new-student-form.component';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    NewStudentFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepicker,
    MatDatepickerModule
  ],
  exports: [
    NewStudentFormComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepicker,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
  ]
})
export class SharedModule { }
