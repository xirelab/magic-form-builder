import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderHomeComponent } from './form-builder-home.component';

describe('FormBuilderHomeComponent', () => {
  let component: FormBuilderHomeComponent;
  let fixture: ComponentFixture<FormBuilderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
