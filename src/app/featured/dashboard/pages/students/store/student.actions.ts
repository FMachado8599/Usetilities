import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student } from '../../../../../core/interfaces/students-interface';

export const StudentsActions = createActionGroup({
  source: 'Students/API',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ students: Student[] }>(),
    'Load Students Failure': props<{ error: string }>(),

    'Add Student': props<{ student: Student }>(),
    'Add Student Success': props<{ student: Student }>(),
    'Add Student Failure': props<{ error: string }>(),

    'Update Student': props<{ student: Student }>(),
    'Update Student Success': props<{ student: Student }>(),
    'Update Student Failure': props<{ error: string }>(),
    
    'Delete Student': props<{ id: string }>(),
    'Delete Student Success': props<{ id: string }>(),
    'Delete Student Failure': props<{ error: string }>(),
  },
});