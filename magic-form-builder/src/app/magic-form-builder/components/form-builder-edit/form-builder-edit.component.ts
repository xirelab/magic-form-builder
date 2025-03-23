import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuControlsMock } from '../../mock-data/menu-controls.mock';
import { FormBuilderControlModel } from '../../models/form-builder-control.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilderControlTypes } from '../../services/form-builder-enums';
import { FormBuilderModel } from '../../models/form-builder-main.model';
import { FormBuilderRowModel } from '../../models/form-builder-row.model';
import { FormBuilderSectionModel } from '../../models/form-builder-section.model';

@Component({
  selector: 'app-form-builder-edit',
  templateUrl: './form-builder-edit.component.html',
  styleUrls: ['./form-builder-edit.component.scss'],
  standalone: false
})
export class FormBuilderEditComponent implements OnInit {

  fb: FormBuilder
  form!: FormGroup;
  builderForm!: FormGroup;
  menuControls: FormBuilderControlModel[] = [];
  formBuilder: FormBuilderModel = new FormBuilderModel();

  formBuilderControlTypes = FormBuilderControlTypes;

  constructor(
    // private fb: FormBuilder,
    // private matDialog: MatDialog,
    // private router: Router
  ) {
    this.fb = new FormBuilder();
  }

  ngOnInit(): void {
    this.initializeMenuControls();
    this.initializeForm();
  }

  private initializeMenuControls() {
    this.menuControls = MenuControlsMock;
  }

  private initializeForm() {
    this.form = this.fb.group({});
    this.builderForm = this.fb.group({});
  }

  noReturnPredicate() {
    return false;
  }

  controlArray(): FormBuilderRowModel[] {
    return this.formBuilder.rows
      ?.sort((a, b) => a.rowNumber - b.rowNumber)
      ?.filter(x => x.isVisible) ?? []
  }

  controlColumns(row: FormBuilderRowModel): FormBuilderSectionModel[] {
    return row?.sections
      ?.sort((a, b) => a.columnNumber - b.columnNumber)
      ?.filter((x: FormBuilderSectionModel) => x.isVisible) ?? []
  }

  addNewRow() {
    this.formBuilder.rows.push(new FormBuilderRowModel(this.formBuilder.rows.length));
  }

  deleteRow(row: FormBuilderRowModel) {
    row.isVisible = false;
    row.sections.forEach(x => x.isVisible = false);
  }

  addNewSection(row: FormBuilderRowModel) {
    row.sections.push(new FormBuilderSectionModel(row.rowNumber, row.sections.length));
  }

  deleteSection(section: FormBuilderSectionModel) {
    section.isVisible = false;
    let row = this.formBuilder.rows.find(x => x.rowNumber === section.rowNumber);
    if (row && !(row.sections?.some(x => x.isVisible))) {
      row.isVisible = false;
    }
  }

  getControls(section: FormBuilderSectionModel): FormBuilderControlModel[] {
    return section?.controls ?? [];
  }

  drop($event: CdkDragDrop<FormBuilderControlModel[]>, section: FormBuilderSectionModel) {
    console.log('dropped: ', $event);
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      let dragControl = $event.previousContainer.data[$event.previousIndex];
      let currentRowNumber = dragControl.rowNumber;
      let currentColumnNumber = dragControl.columnNumber;

      // open popup and mappings

      // dragControl.rowNumber = i;
      // dragControl.columnNumber = j;

      $event.container.data.push(dragControl);

      // this.pageControls = this.pageControls.filter(x => x.rowNumber != i || x.columnNumber != j);
      // this.pageControls.push(...$event.container.data);
      section.controls.push(...$event.container.data);
    }

  }
}
