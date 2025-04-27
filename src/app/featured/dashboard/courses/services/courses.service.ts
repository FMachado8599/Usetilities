import { Injectable } from '@angular/core';

export interface Course{
  id:number;
  name:string;
  field:string;
  moreInfo:string;
  about:string;
  classes:string[];
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _courses: Course[] = [
    {
      "id": 1,
      "name": "Engineering",
      "field": "Science & Technology",
      "moreInfo": "Focuses on mechanical, electrical, and civil engineering.",
      "about": "A four-year degree that prepares students for technical roles.",
      "classes": ["Mathematics", "Physics", "Computer Science"]
    },
    {
      "id": 2,
      "name": "Humanities",
      "field": "Arts & Social Sciences",
      "moreInfo": "Covers literature, history, and social studies.",
      "about": "A three-year program aimed at developing critical thinking.",
      "classes": ["History", "Literature", "Philosophy"]
    }
  ]

    get courses(): Course[] {
      return this._courses;
    }
    set courses(courses: Course[]) { 
      this._courses = courses;
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

  constructor() { }
}
