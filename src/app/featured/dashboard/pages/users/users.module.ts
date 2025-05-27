import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { SharedModule } from '../../../../shared/shared.module';

import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    NewUserFormComponent, 
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  exports: [
    NewUserFormComponent,
  ]
})
export class UsersModule { }
