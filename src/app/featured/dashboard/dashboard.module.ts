import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';
import { UsersComponent } from './pages/users/users.component';
import { HomeModule } from './pages/home/home.module';
import { StudentsModule } from './pages/students/students.module';
import { CoursesModule } from './pages/courses/courses.module';
import { LogoutComponent } from './components/header/logout/logout.component';


@NgModule({
  declarations: [
    CoursesComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    UsersComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StudentsModule,
    CoursesModule,
    HomeModule
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    CoursesComponent,
    StudentsModule,
    UsersComponent,
  ],
  providers: [],

})
export class DashboardModule { }
