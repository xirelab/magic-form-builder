export class FormBuilderDataModel {
    Id?: number;
    FormId?: number;
    Controls?: FormBuilderControlDataModel[];

    Status?: number;
    CreatedBy?: number;
    CreateDate?: Date;
}

export class FormBuilderControlDataModel {
    Id?: number;
    FormId?: number;
    ControlId?: number;
    Value?: string;

    Status?: number;
    CreatedBy?: number;
    CreateDate?: Date;
}