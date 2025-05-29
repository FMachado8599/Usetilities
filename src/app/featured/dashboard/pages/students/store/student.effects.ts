import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StudentsService } from '../../../../../core/services/students.service';

import { StudentsActions } from './student.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Student } from '../../../../../core/interfaces/students-interface';

@Injectable()
export class StudentsEffects {
  
     private actions$ = inject(Actions);
  
    constructor(
    private studentsService: StudentsService
  ) {}

  // Load Students
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.loadStudents),
      mergeMap(() =>
        this.studentsService.getStudents().pipe(
          map((students: Student[]) =>
            StudentsActions.loadStudentsSuccess({ students })
          ),
          catchError((error) =>
            of(StudentsActions.loadStudentsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Add Student
  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.addStudent),
      mergeMap(({ student }) =>
        this.studentsService.addStudent(student).pipe(
          map((newStudent) =>
            StudentsActions.addStudentSuccess({ student: newStudent })
          ),
          catchError((error) =>
            of(StudentsActions.addStudentFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Update Student
  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.updateStudent),
      mergeMap(({ student }) =>
        this.studentsService.updateStudent(student).pipe(
          map((updatedStudent) =>
            StudentsActions.updateStudentSuccess({ student: updatedStudent })
          ),
          catchError((error) =>
            of(StudentsActions.updateStudentFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Delete Student
  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentsActions.deleteStudent),
      mergeMap(({ id }) =>
        this.studentsService.deleteStudent(id).pipe(
          map(() => StudentsActions.deleteStudentSuccess({ id })),
          catchError((error) =>
            of(StudentsActions.deleteStudentFailure({ error: error.message }))
          )
        )
      )
    )
  );
}