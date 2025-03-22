import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderViewComponent } from './components/form-builder-view/form-builder-view.component';
import { FormBuilderControlsComponent } from './components/form-builder-controls/form-builder-controls.component';
import { FormBuilderEditComponent } from './components/form-builder-edit/form-builder-edit.component';
import { FormBuilderPopupComponent } from './components/form-builder-popup/form-builder-popup.component';
import { MagicFormBuilderRoutingModule } from './magic-form-builder.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '../material.module';
import { MagicFormBuilderComponent } from './container/magic-form-builder/magic-form-builder.component';

@NgModule({
  declarations: [
    MagicFormBuilderComponent,
    FormBuilderViewComponent,
    FormBuilderControlsComponent,
    FormBuilderEditComponent,
    FormBuilderPopupComponent
  ],
  imports: [
    CommonModule,
    MagicFormBuilderRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    DragDropModule
  ]
})
export class MagicFormBuilderModule { }
