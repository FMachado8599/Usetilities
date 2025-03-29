import { Component } from '@angular/core';

interface Student {
  ci:number;
  avatar:string;
  name:string;
  lastName:string;
  location:string;
  score:number;
  presenteeism:number;
  courses:number[];
  careers:number[];
  nationality:string;
  birth:number;
  bio:string;
}

interface Career{
  id:number;
  name:string;
  field:string;
  moreInfo:string;
  about:string;
  classes:string[];
}

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {

  public students: Student[] = [
    {
      "ci": 12345678,
      "avatar": "https://example.com/avatar1.jpg",
      "name": "John",
      "lastName": "Doe",
      "location": "New York, USA",
      "score": 95,
      "presenteeism": 98,
      "courses": [1, 2],
      "careers": [1],
      "nationality": "American",
      "birth": 22,
      "bio": "A passionate student focused on engineering and scientific research."
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
      "nationality": "Spanish",
      "birth": 21,
      "bio": "Lover of books and historical research, aiming for a career in education."
    }
  ];

  public careers: Career[] = [
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

  constructor() { };

  getCareerName(id: number): string {
    const career = this.careers.find(c => c.id === id);
    return career ? career.name : 'N/A';
  }

}
