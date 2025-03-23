import { FormBuilderBaseModel } from "./form-builder-base.model";
import { FormBuilderSectionModel } from "./form-builder-section.model";

export class FormBuilderRowModel extends FormBuilderBaseModel {
    rowNumber: number;
    sections: FormBuilderSectionModel[];
    isVisible: boolean;

    constructor(rowNumber: number = 0) {
        super();
        this.rowNumber = rowNumber;
        this.isVisible = true;
        this.sections = [new FormBuilderSectionModel(rowNumber)];
    }
}