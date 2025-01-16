import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuControlsMock } from '../../mock-data/menu-controls.mock';
import { FormBuilderControlModel } from '../../models/form-builder-control.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilderControlTypes } from '../../services/form-builder-enums';

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
  pageControls: FormBuilderControlModel[] = [];
  FormBuilderControlTypes = FormBuilderControlTypes

  numberOfRows: number = 1;
  numberOfColumns: number[] = [1];

  constructor(
    // private fb: FormBuilder,
    // private matDialog: MatDialog,
    // private router: Router
  ) {
    this.fb= new FormBuilder();
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

  controlArray(): number[] {
    return new Array<number>(this.numberOfRows);
  }

  controlColumns(rowNumber: number): number[] {
    return new Array<number>(this.numberOfColumns[rowNumber]);
  }

  addNewRow() {
    this.numberOfRows += 1;
  }

  getPageControls(i: number, j: number): FormBuilderControlModel[] {
    return this.pageControls?.filter(x => x.RowNumber === i && x.ColumnNumber === j);
  }

  drop($event: CdkDragDrop<FormBuilderControlModel[]>, i: number, j: number) {
    console.log('dropped: ', $event);
    if ($event.previousContainer === $event.container) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      let dragControl = $event.previousContainer.data[$event.previousIndex];
      let currentRowNumber = dragControl.RowNumber;
      let currentColumnNumber = dragControl.ColumnNumber;

      // open popup and mappings

      dragControl.RowNumber = i;
      dragControl.ColumnNumber = j;

      $event.container.data.push(dragControl);

      this.pageControls = this.pageControls.filter(x => x.RowNumber != i || x.ColumnNumber != j);
      this.pageControls.push(...$event.container.data);
    }

  }
}
