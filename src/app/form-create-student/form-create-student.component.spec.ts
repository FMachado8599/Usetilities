import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateStudentComponent } from './form-create-student.component';

describe('FormCreateStudentComponent', () => {
  let component: FormCreateStudentComponent;
  let fixture: ComponentFixture<FormCreateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCreateStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
