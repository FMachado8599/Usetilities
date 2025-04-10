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
  online?:boolean;
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

  avatarPlaceholder: string = "/assets/png/avatar_placeholder_white.png";

  public students: Student[] = [
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
      "nationality": "American",
      "birth": 22,
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
      "nationality": "Spanish",
      "birth": 21,
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
      "nationality": "Canadian",
      "birth": 23,
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
      "nationality": "French",
      "birth": 20,
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
      "nationality": "Argentinian",
      "birth": 24,
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
      "nationality": "Australian",
      "birth": 22,
      "bio": "Dedicated environmental scientist working on sustainability projects.",
      "online": true
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
