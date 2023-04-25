import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilderControlModel } from '../models/form-builder-control.model';
import { FormBuilderDataModel } from '../models/form-builder-data.model';
import { FormBuilderControlTypes } from './form-builder-enums';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderEngineService {

  constructor() { }

  buildForm({ controls, values }: {controls: FormBuilderControlModel[]; values: FormBuilderDataModel;}, form: FormGroup) {
    if (!form) {
      const group: any = {};
      controls.forEach(control => {
        group[control.Key] = this.createFormControl(control, values);
      });
      return new FormGroup(group);
    } else {
      controls.forEach(control => {
        if (form.contains(control.Key)) {
          form.removeControl(control.Key);
        }
        form.addControl(control.Key, this.createFormControl(control, values));
      });
      return form;
    }
  }

  buildFormSingle({ control, values }: {control: FormBuilderControlModel; values: FormBuilderDataModel;}, form: FormGroup) {
    if (!form) {
      const group: any = {};
      group[control.Key] = this.createFormControl(control, values);
      return new FormGroup(group);
    } else {
      if (form.contains(control.Key)) {
        form.removeControl(control.Key);
      }
      form.addControl(control.Key, this.createFormControl(control, values));
      return form;
    }
  }

  private createFormControl(control: FormBuilderControlModel, values: FormBuilderDataModel): FormControl {
    let controlValue = values?.Controls?.find(x => x.Id === control.Id)?.Value ?? '';
    let value = this.isValueNumber(control) ? +controlValue : controlValue;
    return control?.IsRequired ? new FormControl(value, Validators.required) : new FormControl(value);
  }

  private isValueNumber(control: FormBuilderControlModel) : boolean {
    // This list has to update
    return control?.Type === FormBuilderControlTypes.dropdown ||
           control?.Type === FormBuilderControlTypes.radiobutton;
  }
}
