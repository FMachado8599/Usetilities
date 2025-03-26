import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  students = [
    {
      "ci": "12345678",
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
      "ci": "87654321",
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

  constructor() { };

}
