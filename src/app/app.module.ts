import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormCreateStudentComponent } from './form-create-student/form-create-student.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './featured/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    FormCreateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
