import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../../../../core/services/students.service';
import { CoursesService } from '../../../../core/services/courses.service';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentEditComponent } from './student-edit/student-edit.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { studentsReducer } from './store/student.reducer';
import { StudentsEffects } from './store/student.effects';

@NgModule({
  declarations: [
    StudentsComponent,
    NewStudentFormComponent,
    StudentEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
    StoreModule.forFeature('students', studentsReducer),
    EffectsModule.forFeature([StudentsEffects]),
  ],
  providers: [
    StudentsService,
    CoursesService,
  ],
    exports: [
    NewStudentFormComponent,
    StudentEditComponent,
  ]
})
export class StudentsModule { }