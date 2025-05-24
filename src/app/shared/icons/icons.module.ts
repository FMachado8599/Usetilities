import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatIconModule],
})
export class IconsModule {

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      const icons = [
        { name: 'avatar', path: 'assets/svg/avatar.svg' },
        { name: 'career', path: 'assets/svg/career.svg' },
        { name: 'clipboard-data', path: 'assets/svg/clipboard-data.svg' },
        { name: 'course', path: 'assets/svg/course.svg' },
        { name: 'edit', path: 'assets/svg/edit.svg' },
        { name: 'home', path: 'assets/svg/home.svg' },
        { name: 'student', path: 'assets/svg/student.svg' },
        { name: 'teachers', path: 'assets/svg/teachers.svg' },
        { name: 'trash', path: 'assets/svg/trash.svg' },
    ];

    icons.forEach(icon => {
      iconRegistry.addSvgIcon(
        icon.name,
        sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
