import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderPropsComponent } from './form-builder-props.component';

describe('FormBuilderPropsComponent', () => {
  let component: FormBuilderPropsComponent;
  let fixture: ComponentFixture<FormBuilderPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilderPropsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
