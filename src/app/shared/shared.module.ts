import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { IconsModule } from './icons/icons.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogButtonComponent } from './components/confirm-dialog-button/confirm-dialog-button.component';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    ConfirmDialogComponent,
    ConfirmDialogButtonComponent,
  ],
  imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatOptionModule,
        MatOption,
        MatCheckboxModule,
        MatSelectModule,
        IconsModule,
        MatIcon,
  ],
  exports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatOptionModule,
        MatOption,
        MatCheckboxModule,
        MatSelectModule,
        IconsModule,
        ConfirmDialogComponent,
        ConfirmDialogButtonComponent,
        MatIcon,
  ],
  providers: [
        {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
})
export class SharedModule { }
