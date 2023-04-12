import { TestBed } from '@angular/core/testing';

import { FormBuilderEngineService } from './form-builder-engine.service';

describe('FormBuilderEngineService', () => {
  let service: FormBuilderEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuilderEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
