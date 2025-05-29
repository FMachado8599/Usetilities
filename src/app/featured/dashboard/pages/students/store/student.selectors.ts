import { createFeatureSelector, createSelector } from '@ngrx/store';
import { studentsFeatureKey, StudentState } from './student.reducer';

export const selectStudentState =
  createFeatureSelector<StudentState>(studentsFeatureKey);

export const selectStudents = createSelector(
  selectStudentState,
  (state) => state.students
);

export const selectStudentsLoading = createSelector(
  selectStudentState,
  (state) => state.loading
);

export const selectStudentsError = createSelector(
  selectStudentState,
  (state) => state.error
);