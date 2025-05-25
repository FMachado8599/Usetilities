import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CoursesService } from '../../../../core/services/courses.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CourseEditComponent } from './course-edit/course-edit.component';

@NgModule({
  declarations: [
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
    NewCourseFormComponent,
  ],
})
export class CoursesModule { }
