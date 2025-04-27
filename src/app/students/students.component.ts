import { Component } from '@angular/core';
import { StudentsService, Student } from './services/students.service';


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

  public students: Student[] = []

  constructor(private studentService: StudentsService) { };

  ngOnInit() {
    this.students = this.studentService.students;
  }

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

  getCareerName(id: number): string {
    const career = this.careers.find(c => c.id === id);
    return career ? career.name : 'N/A';
  }

}
