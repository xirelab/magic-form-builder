import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderControlsComponent } from './form-builder-controls.component';

describe('FormBuilderControlsComponent', () => {
  let component: FormBuilderControlsComponent;
  let fixture: ComponentFixture<FormBuilderControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
