import { FormBuilderBaseModel } from "./form-builder-base.model";
import { FormBuilderControlModel } from "./form-builder-control.model";

export class FormBuilderModel extends FormBuilderBaseModel {
    name?: string;
    numberOfRows?: number;
    numberOfColumns?: number[];
    // NumberOfColumnsJson?: string;
    controls?: FormBuilderControlModel[];
}