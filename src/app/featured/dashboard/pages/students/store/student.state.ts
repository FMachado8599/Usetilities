import { Student } from '../../../../../core/interfaces/students-interface';

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
