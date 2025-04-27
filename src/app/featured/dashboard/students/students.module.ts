import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from './services/students.service';
import { CoursesService } from '../courses/services/courses.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StudentsService,
    CoursesService
  ],
})
export class StudentsModule { }
