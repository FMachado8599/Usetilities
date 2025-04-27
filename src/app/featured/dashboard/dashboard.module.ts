import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard.component';
import { ToolbarComponent } from '../../toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { SharedModule } from '../../shared/shared.module';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    CoursesComponent,
    DashboardComponent,
    ToolbarComponent,
    NavbarComponent,
    StudentsComponent,
    ClassesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
    CoursesComponent,
    ToolbarComponent,
    NavbarComponent,
    StudentsComponent,
    ClassesComponent,
  ],
  providers: [],

})
export class DashboardModule { }
