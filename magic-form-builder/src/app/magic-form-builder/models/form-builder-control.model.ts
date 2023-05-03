export class FormBuilderControlModel {
    Id?: number;
    FormId: number;
    Name: string;
    Type: number;
    Key: string;
    Label: string;

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
        }
    }) {
        this.FormId = options.formId;
        this.Name = options.name;
        this.Type = options.type;
        this.Key = options.key;
        this.Label = options.label;

        // this.IsRequired = false;
        // this.Width = 100;
        // this.Position = '';
    }
}
