import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  {
    path: ':id',
    component: StudentEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }