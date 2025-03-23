import { FormBuilderBaseModel } from "./form-builder-base.model";
import { FormBuilderControlModel } from "./form-builder-control.model";
import { FormBuilderRowModel } from "./form-builder-row.model";

export class FormBuilderModel extends FormBuilderBaseModel {
    name: string;
    isTemplate: boolean;
    rows: FormBuilderRowModel[];
    // numberOfRows?: number;
    // numberOfColumns?: number[];
    // NumberOfColumnsJson?: string;
    controls: FormBuilderControlModel[];

    constructor(isTemplate: boolean = false) {
        super();
        this.name = '';
        this.isTemplate = isTemplate;
        this.rows = [];
        this.controls = [];

        if (!isTemplate) {
            this.rows = [new FormBuilderRowModel()];
        }
        
    }
}