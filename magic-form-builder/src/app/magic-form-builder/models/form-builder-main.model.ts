import { FormBuilderControlModel } from "./form-builder-control.model";

export class FormBuilderModel {
    Id?: number;
    Name?: string;
    NumberOfRows?: number;
    NumberOfColumns?: number[];
    NumberOfColumnsJson?: string;
    Controls?: FormBuilderControlModel[];

    Status?: number;
    CreatedBy?: number;
    CreateDate?: Date;
}