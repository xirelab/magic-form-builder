import { Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FormBuilderControlModel } from '../models/form-builder-control.model';
import { FormBuilderDataModel } from '../models/form-builder-data.model';
import { FormBuilderControlTypes } from './form-builder-enums';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderEngineService {

  constructor() { }

  buildForm({ controls, values }: {controls: FormBuilderControlModel[]; values: FormBuilderDataModel;}, form: UntypedFormGroup) {
    if (!form) {
      const group: any = {};
      controls.forEach(control => {
        group[control.key] = this.createFormControl(control, values);
      });
      return new UntypedFormGroup(group);
    } else {
      controls.forEach(control => {
        if (form.contains(control.key)) {
          form.removeControl(control.key);
        }
        form.addControl(control.key, this.createFormControl(control, values));
      });
      return form;
    }
  }

  buildFormSingle({ control, values }: {control: FormBuilderControlModel; values: FormBuilderDataModel;}, form: UntypedFormGroup) {
    if (!form) {
      const group: any = {};
      group[control.key] = this.createFormControl(control, values);
      return new UntypedFormGroup(group);
    } else {
      if (form.contains(control.key)) {
        form.removeControl(control.key);
      }
      form.addControl(control.key, this.createFormControl(control, values));
      return form;
    }
  }

  private createFormControl(control: FormBuilderControlModel, values: FormBuilderDataModel): UntypedFormControl {
    let controlValue = values?.controls?.find(x => x.id === control.id)?.value ?? '';
    let value = this.isValueNumber(control) ? +controlValue : controlValue;
    return control?.isRequired ? new UntypedFormControl(value, Validators.required) : new UntypedFormControl(value);
  }

  private isValueNumber(control: FormBuilderControlModel) : boolean {
    // This list has to update
    return control?.type === FormBuilderControlTypes.dropdown ||
           control?.type === FormBuilderControlTypes.radiobutton;
  }
}
