import { Injectable } from '@angular/core';

export interface Student {
  ci:number;
  avatar?:string;
  name:string;
  lastName:string;
  location:string;
  score?:number;
  presenteeism?:number;
  courses?:number[];
  careers?:number[];
  birth?:Date;
  bio?:string;
  online?:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  

  private _students: Student[] = [
    {
      "ci": 12345678,
      "avatar": "https://example.com/avatar1.jpg",
      "name": "John",
      "lastName": "Doe",
      "location": "New York, USA",
      "score": 100,
      "presenteeism": 100,
      "courses": [1, 2],
      "careers": [1],
      "birth": new Date(2000, 0, 22), // 22 de enero de 2000
      "bio": "A passionate student focused on engineering and scientific research.",
      "online": true
    },
    {
      "ci": 87654321,
      "avatar": "https://example.com/avatar2.jpg",
      "name": "Ana",
      "lastName": "González",
      "location": "Madrid, Spain",
      "score": 88,
      "presenteeism": 90,
      "courses": [3, 4],
      "careers": [2],
      "birth": new Date(2000, 0, 21), // 21 de enero de 2000
      "bio": "Lover of books and historical research, aiming for a career in education.",
      "online": false
    },
    {
      "ci": 11223344,
      "avatar": "https://example.com/avatar3.jpg",
      "name": "Liam",
      "lastName": "Smith",
      "location": "Toronto, Canada",
      "score": 92,
      "presenteeism": 97,
      "courses": [2, 5],
      "careers": [1, 3],
      "birth": new Date(2000, 0, 23), // 23 de enero de 2000
      "bio": "Aspiring software engineer with a passion for AI and robotics.",
      "online": true
    },
    {
      "ci": 55667788,
      "avatar": "https://example.com/avatar4.jpg",
      "name": "Sophie",
      "lastName": "Dubois",
      "location": "Paris, France",
      "score": 85,
      "presenteeism": 82,
      "courses": [3, 6],
      "careers": [2],
      "birth": new Date(2000, 0, 20), // 20 de enero de 2000
      "bio": "Art and literature enthusiast, specializing in French and European history.",
      "online": false
    },
    {
      "ci": 99887766,
      "avatar": "https://example.com/avatar5.jpg",
      "name": "Carlos",
      "lastName": "Fernández",
      "location": "Buenos Aires, Argentina",
      "score": 90,
      "presenteeism": 94,
      "courses": [1, 4],
      "careers": [3],
      "birth": new Date(2000, 0, 24), // 24 de enero de 2000
      "bio": "Economics student passionate about finance and business development.",
      "online": true
    },
    {
      "ci": 33445566,
      "avatar": "https://example.com/avatar6.jpg",
      "name": "Emma",
      "lastName": "Taylor",
      "location": "Sydney, Australia",
      "score": 87,
      "presenteeism": 95,
      "courses": [2, 5, 6],
      "careers": [1, 2],
      "birth": new Date(2000, 0, 22), // 22 de enero de 2000
      "bio": "Dedicated environmental scientist working on sustainability projects.",
      "online": true
    }
  ];

  get students(): Student[] {
    return this._students;
  }
  set students(students: Student[]) { 
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

  constructor() { }
}
