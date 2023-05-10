import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuControlsMock } from '../../mock-data/menu-controls.mock';
import { FormBuilderControlModel } from '../../models/form-builder-control.model';

@Component({
  selector: 'app-form-builder-edit',
  templateUrl: './form-builder-edit.component.html',
  styleUrls: ['./form-builder-edit.component.scss']
})
export class FormBuilderEditComponent implements OnInit {

  form!: FormGroup;
  builderForm!: FormGroup;
  menuControls: FormBuilderControlModel[] = [];
  pageControls: FormBuilderControlModel[] = [];

  numberOfRows: number = 1;
  numberOfColumns: number[] = [1];

  constructor(
    private fb: FormBuilder,
    // private matDialog: MatDialog,
    // private router: Router
  ) { }

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
}
