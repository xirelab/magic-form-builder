import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderPopupComponent } from './form-builder-popup.component';

describe('FormBuilderPopupComponent', () => {
  let component: FormBuilderPopupComponent;
  let fixture: ComponentFixture<FormBuilderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
