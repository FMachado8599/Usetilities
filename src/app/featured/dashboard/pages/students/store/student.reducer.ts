import { createReducer, on } from '@ngrx/store';
import { StudentsActions } from './student.actions';
import { Student } from '../../../../../core/interfaces/students-interface';

export const studentsFeatureKey = 'students';

export interface StudentState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

export const initialStudentState: StudentState = {
  students: [],
  loading: false,
  error: null,
};

export const studentsReducer = createReducer(
  initialStudentState,

// ----------------------------------------------READ-----------------------
  on(StudentsActions.loadStudents, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(StudentsActions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    loading: false,
    students,
  })),
  on(StudentsActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

// ----------------------------------------------CREATE-----------------------
  on(StudentsActions.addStudent, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(StudentsActions.addStudentSuccess, (state, { student }) => ({
    ...state,
    loading: false,
    students: [...state.students, student],
  })),
  on(StudentsActions.addStudentFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

// ----------------------------------------------UPDATE-----------------------
  on(StudentsActions.updateStudent, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(StudentsActions.updateStudentSuccess, (state, { student }) => ({
    ...state,
    loading: false,
    students: state.students.map((s) =>
      s.id === student.id ? student : s
    ),
  })),
  on(StudentsActions.updateStudentFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

// ----------------------------------------------DELETE-----------------------
  on(StudentsActions.deleteStudent, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(StudentsActions.deleteStudentSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    students: state.students.filter((s) => s.id !== id),
  })),
  on(StudentsActions.deleteStudentFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);