import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderEditComponent } from './form-builder-edit.component';

describe('FormBuilderEditComponent', () => {
  let component: FormBuilderEditComponent;
  let fixture: ComponentFixture<FormBuilderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
