import { Injectable } from '@angular/core';
import { Student } from '../interfaces/students-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  private studentsUrl = 'assets/data/students.json';
  private _students: Student[] = []

  constructor(private http: HttpClient) {
    this.loadStudents();
  }

  private loadStudents(): void {
    this.http.get<Student[]>(this.studentsUrl).subscribe((data) => {
      this._students = data;
    });
  }

  getStudents(): Observable<Student[]> {
  return this.http.get<Student[]>(this.studentsUrl);
  }
  setStudents(students: Student[]) { 
    this._students = students;
  }
  getStudentByCi(ci: number): Student | undefined {
    return this._students.find(student => student.ci === ci);
  }
  addStudent(student: Student): void {
    this._students.push(student);
  }
  updateStudent(ci: number, updatedStudent: Student): void {
    const index = this._students.findIndex(student => student.ci === ci);
    if (index !== -1) {
      this._students[index] = { ...this._students[index], ...updatedStudent };
    }
  }
  deleteStudent(ci: number): void {
    const index = this._students.findIndex(student => student.ci === ci);
    if (index !== -1) {
      this._students.splice(index, 1);
    }
  }
}
