import { FormBuilderBaseModel } from "./form-builder-base.model";
import { FormBuilderControlModel } from "./form-builder-control.model";

export class FormBuilderSectionModel extends FormBuilderBaseModel {
    rowNumber: number;
    columnNumber: number;
    isVisible: boolean;
    controls: FormBuilderControlModel[];

    constructor(rowNumber: number, columnNumber: number = 0) {
        super();
        this.rowNumber = rowNumber;
        this.columnNumber = columnNumber;
        this.isVisible = true;
        this.controls = [];
    }
}