import { FormBuilderBaseModel } from "./form-builder-base.model";

export class FormBuilderControlModel extends FormBuilderBaseModel {
    formId: number;
    name: string;
    type: number;
    key: string;
    label: string;
    rowNumber?: number;
    columnNumber?: number;

    isRequired?: boolean;
    width?: number;
    height?: number;
    positionX?: number;
    positionY?: number;
    alignment?: string;

    constructor({ options }: {
        options: {
            formId: number;
            name: string;
            type: number;
            key: string;
            label: string;
            rowNumber?: number;
            columnNumber?: number
        }
    }) {
        super();
        this.formId = options.formId;
        this.name = options.name;
        this.type = options.type;
        this.key = options.key;
        this.label = options.label;
        this.rowNumber = options.rowNumber;
        this.columnNumber = options.columnNumber;

        // this.isRequired = false;
        // this.width = 100;
        // this.position = '';
    }
}
