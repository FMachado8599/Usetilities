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
  @Output() confirmed = new EventEmitter<string>();

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { 
        title: '¿Estas Seguro?', 
        message: `Estas por eliminar ${'a ' + this.entityName}?` 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.confirmed.emit(this.studentId);
      } else {
        console.log('Usuario canceló');
      }
    });
  }
}
