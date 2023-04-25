import { Injectable } from '@angular/core';
import { FormBuilderModel } from '../models/form-builder-main.model';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor() { }

  copyFormControls(form: FormBuilderModel): FormBuilderModel {
    let formBuilder: FormBuilderModel = new FormBuilderModel();


    return formBuilder;
  }

}
