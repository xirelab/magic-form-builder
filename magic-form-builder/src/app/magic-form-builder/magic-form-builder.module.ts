import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderHomeComponent } from './components/form-builder-home/form-builder-home.component';
import { FormBuilderViewComponent } from './components/form-builder-view/form-builder-view.component';
import { FormBuilderControlsComponent } from './components/form-builder-controls/form-builder-controls.component';
import { FormBuilderEditComponent } from './components/form-builder-edit/form-builder-edit.component';
import { FormBuilderPopupComponent } from './components/form-builder-popup/form-builder-popup.component';
import { MagicFormBuilderRoutingModule } from './magic-form-builder.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FormBuilderHomeComponent,
    FormBuilderViewComponent,
    FormBuilderControlsComponent,
    FormBuilderEditComponent,
    FormBuilderPopupComponent
  ],
  imports: [
    CommonModule,
    MagicFormBuilderRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MagicFormBuilderModule { }
