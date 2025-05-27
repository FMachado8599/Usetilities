import { Injectable } from '@angular/core';
import { Course } from '../interfaces/courses-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private apiUrl = 'http://localhost:1500/courses';

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  addCourse( course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(this.apiUrl, course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
