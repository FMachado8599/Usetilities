import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'header-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  private dialog = inject(MatDialog);

  constructor(public authService: AuthService) {}

  confirmLogout() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Logout?',
        message: 'You are about to logout, are you sure?',
        negative: 'Cancel',
        positive: 'Continue',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.authService.logout(); //
      }
    });
  }
}
