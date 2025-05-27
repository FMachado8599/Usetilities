import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { SharedModule } from '../../../../shared/shared.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { CoursesService } from '../../../../core/services/courses.service';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
    NewCourseFormComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ],
  providers: [
    CoursesService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}

  ],
  exports: [
    CoursesComponent,
    NewCourseFormComponent,
    CourseEditComponent,
  ],
})
export class CoursesModule { }
