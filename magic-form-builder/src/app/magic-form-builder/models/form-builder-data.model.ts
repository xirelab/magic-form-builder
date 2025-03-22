import { FormBuilderBaseModel } from "./form-builder-base.model";

export class FormBuilderDataModel extends FormBuilderBaseModel {
    formId?: number;
    controls?: FormBuilderControlDataModel[];
}

export class FormBuilderControlDataModel extends FormBuilderBaseModel {
    formId?: number;
    controlId?: number;
    value?: string;
}