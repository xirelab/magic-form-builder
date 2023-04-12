import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderViewComponent } from './form-builder-view.component';

describe('FormBuilderViewComponent', () => {
  let component: FormBuilderViewComponent;
  let fixture: ComponentFixture<FormBuilderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
