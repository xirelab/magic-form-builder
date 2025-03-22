import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicFormBuilderComponent } from './magic-form-builder.component';

describe('MagicFormBuilderComponent', () => {
  let component: MagicFormBuilderComponent;
  let fixture: ComponentFixture<MagicFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
