import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilderControlModel } from '../../models/form-builder-control.model';
import { FormBuilderControlTypes } from '../../services/form-builder-enums';

@Component({
    selector: 'app-form-builder-controls',
    templateUrl: './form-builder-controls.component.html',
    styleUrls: ['./form-builder-controls.component.scss'],
    standalone: false
})
export class FormBuilderControlsComponent implements OnInit {

  @Input() control: FormBuilderControlModel | undefined;
  @Input() form: UntypedFormGroup = new UntypedFormGroup({});

  formValue: any;
  types = FormBuilderControlTypes;

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formValue = this.control ? this.form?.get(this.control.key)?.value || '' : '';
  }

  width = (width?: number) => `${width}%`;

}
