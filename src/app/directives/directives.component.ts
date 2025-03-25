import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  public name: string = 'Patricio';
  public lastname: string = 'Estrella';
  age: number = 30;

  hayError: boolean = false;
}
