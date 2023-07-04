export class FormBuilderControlModel {
    Id?: number;
    FormId: number;
    Name: string;
    Type: number;
    Key: string;
    Label: string;
    RowNumber: number;
    ColumnNumber: number;

    IsRequired?: boolean;
    Width?: number;
    Position?: string;

    Status?: number;
    CreatedBy?: number;
    CreateDate?: Date;

    constructor({ options }: {
        options: {
            formId: number;
            name: string;
            type: number;
            key: string;
            label: string;
            rowNumber: number;
            columnNumber: number
        }
    }) {
        this.FormId = options.formId;
        this.Name = options.name;
        this.Type = options.type;
        this.Key = options.key;
        this.Label = options.label;
        this.RowNumber = options.rowNumber;
        this.ColumnNumber = options.columnNumber;

        // this.IsRequired = false;
        // this.Width = 100;
        // this.Position = '';
    }
}
