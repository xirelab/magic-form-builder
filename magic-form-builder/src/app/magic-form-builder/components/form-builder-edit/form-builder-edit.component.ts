import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuControlsList } from '../../services/menu-controls-list';
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
    this.menuControls = MenuControlsList;
  }

  private initializeForm() {
    this.form = this.fb.group({});
    this.builderForm = this.fb.group({});
  }

  noReturnPredicate() {
    return false;
  }

  // Get methods

  getRows(): FormBuilderRowModel[] {
    return this.formBuilder.rows
      ?.sort((a, b) => a.rowNumber - b.rowNumber)
      ?.filter(x => x.isVisible) ?? []
  }

  getSections(row: FormBuilderRowModel): FormBuilderSectionModel[] {
    return row?.sections
      ?.sort((a, b) => a.columnNumber - b.columnNumber)
      ?.filter((x: FormBuilderSectionModel) => x.isVisible) ?? []
  }

  getControls(section: FormBuilderSectionModel): FormBuilderControlModel[] {
    return section?.controls ?? [];
  }

  // Row and Section actions

  addNewRow() {
    this.formBuilder.rows.push(new FormBuilderRowModel(this.formBuilder.rows.length));
  }

  deleteRow(row: FormBuilderRowModel) {
    row.isVisible = false;
    row.sections.forEach(x => x.isVisible = false);
  }

  moveRowUp(row: FormBuilderRowModel) {
    let topRow = this.formBuilder.rows.find(x => x.rowNumber === row.rowNumber - 1);
    if (topRow) {
      this.swaprows(row, topRow);
    }
  }

  moveRowDown(row: FormBuilderRowModel) {
    let bottomRow = this.formBuilder.rows.find(x => x.rowNumber === row.rowNumber + 1);
    if (bottomRow) {
      this.swaprows(row, bottomRow);
    }
  }

  private swaprows(row1: FormBuilderRowModel, row2: FormBuilderRowModel) {
    let rowNumber = row1.rowNumber;
    row1.rowNumber = row2.rowNumber;
    row2.rowNumber = rowNumber;
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

  moveSectionLeft(row: FormBuilderRowModel, section: FormBuilderSectionModel) {
    let leftSesction = row.sections.find(x => x.columnNumber === section.columnNumber - 1);
    if (leftSesction) {
      this.swapSections(section, leftSesction);
    }
  }

  moveSectionRight(row: FormBuilderRowModel, section: FormBuilderSectionModel) {
    let rightSesction = row.sections.find(x => x.columnNumber === section.columnNumber + 1);
    if (rightSesction) {
      this.swapSections(section, rightSesction);
    }
  }

  private swapSections(section: FormBuilderSectionModel, leftSesction: FormBuilderSectionModel) {
    let columnNumber = section.columnNumber;
    section.columnNumber = leftSesction.columnNumber;
    leftSesction.columnNumber = columnNumber;
  }

  // Drop

  drop($event: CdkDragDrop<FormBuilderControlModel[]>, section: FormBuilderSectionModel) {
    console.log('dropped event: ', $event);
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      let dragControl = $event.previousContainer.data[$event.previousIndex];
      // let currentRowNumber = dragControl.rowNumber;
      // let currentColumnNumber = dragControl.columnNumber;

      // open popup and mappings

      // dragControl.rowNumber = i;
      // dragControl.columnNumber = j;

      $event.container.data.push(dragControl);

      // this.pageControls = this.pageControls.filter(x => x.rowNumber != i || x.columnNumber != j);
      // this.pageControls.push(...$event.container.data);

      // section.controls.push(...$event.container.data);

      console.log('model after dropped: ', this.formBuilder);
    }

  }
}
