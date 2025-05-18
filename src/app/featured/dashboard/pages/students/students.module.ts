import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from './services/students.service';
import { CoursesService } from '../courses/services/courses.service';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    StudentsComponent,
    NewStudentFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule
  ],
  providers: [
    StudentsService,
    CoursesService,
  ],
    exports: [
    NewStudentFormComponent,
  ]
})
export class StudentsModule { }