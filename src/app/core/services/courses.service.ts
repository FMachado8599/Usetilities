import { Injectable } from '@angular/core';
import { Course } from '../interfaces/courses-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private coursesUrl = 'assets/data/courses.json';
  private _courses: Course[] = [];

  constructor(private http: HttpClient) {
    this.loadCourses();
  }

  private loadCourses(): void {
    this.http.get<Course[]>(this.coursesUrl).subscribe((data) => {
      this._courses = data;
    });
  }

  getCourses(): Observable<Course[]> {
  return this.http.get<Course[]>(this.coursesUrl);
  }
  getCourseById(id: number): Course | undefined {
    return this._courses.find(course => course.id === id);
  }
  addCourse(course: Course): void {
    this._courses.push(course);
  }
  updateCourse(id: number, updatedcourse: Course): void {
    const index = this._courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this._courses[index] = { ...this._courses[index], ...updatedcourse };
    }
  }
  deleteCourse(id: number): void {
    const index = this._courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this._courses.splice(index, 1);
    }
  }
}
