import { Injectable } from '@angular/core';

export interface Class{
  id:number;
  name:string;
  field:string;
  moreInfo:string;
  about:string;
}

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private _classes: Class[] = [
    {
      "id": 1,
      "name": "Mathematics",
      "field": "Science & Technology",
      "moreInfo": "Focuses on algebra, calculus, and geometry.",
      "about": "A four-year degree that prepares students for technical roles.",
    },
    {
      "id": 2,
      "name": "History",
      "field": "Arts & Social Sciences",
      "moreInfo": "Covers literature, history, and social studies.",
      "about": "A three-year program aimed at developing critical thinking.",
    },
    {
      "id": 3,
      "name": "Computer Science",
      "field": "Science & Technology",
      "moreInfo": "Focuses on programming, algorithms, and data structures.",
      "about": "A four-year degree that prepares students for technical roles.",
    },
    {
      "id": 4,
      "name": "Philosophy",
      "field": "Arts & Social Sciences",
      "moreInfo": "Covers ethics, logic, and metaphysics.",
      "about": "A three-year program aimed at developing critical thinking.",
    },
    {
      "id": 5,
      "name": "Physics",
      "field": "Science & Technology",
      "moreInfo": "Focuses on mechanics, thermodynamics, and electromagnetism.",
      "about": "A four-year degree that prepares students for technical roles.",
    },
    {
      "id": 6,
      "name": "Literature",
      "field": "Arts & Social Sciences",
      "moreInfo": "Covers poetry, prose, and drama.",
      "about": "A three-year program aimed at developing critical thinking.",
    }
  ]
    get classes(): Class[] {
      return this._classes;
    }
    set classes(classes: Class[]) {
      this._classes = classes;
    }
    getClassById(id: number): Class | undefined {
      return this._classes.find(classes => classes.id === id);
    }
    addClass(classes: Class): void {
      this._classes.push(classes);
    }
    updateClass(id: number, updatedclasses: Class): void {
      const index = this._classes.findIndex(classes => classes.id === id);
      if (index !== -1) {
        this._classes[index] = { ...this._classes[index], ...updatedclasses };
      }
    }
    deleteClass(id: number): void {
      const index = this._classes.findIndex(classes => classes.id === id);
      if (index !== -1) {
        this._classes.splice(index, 1);
      }
    }

  constructor() { }
}
