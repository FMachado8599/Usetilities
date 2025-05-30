import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'shared-confirm-dialog-button',
  templateUrl: './confirm-dialog-button.component.html',
  styleUrls: ['./confirm-dialog-button.component.scss'],
  standalone: false,
})

export class ConfirmDialogButtonComponent {

  private dialog = inject(MatDialog);

  @Input() entityName: string = '';
  @Input() studentId!: string;
  @Input() courseId!: number;
  @Input() userId!: number;
  @Output() confirmed = new EventEmitter<string>();
  @Output() confirmed_course = new EventEmitter<number>();
  @Output() confirmed_user = new EventEmitter<number>();

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { 
        title: 'Are you sure?', 
        message: `You are about to delete ${this.entityName}?`,
        negative: 'Cancel',
        positive:'Delete',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('Emitido ID:', this.courseId);
        this.confirmed.emit(this.studentId);
        this.confirmed_course.emit(this.courseId)
        this.confirmed_user.emit(this.userId)
      } else {
        console.log('Usuario canceló');
      }
    });
  }
}
