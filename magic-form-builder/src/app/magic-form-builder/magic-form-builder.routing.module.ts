import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderEditComponent } from './components/form-builder-edit/form-builder-edit.component';
import { MagicFormBuilderComponent } from './container/magic-form-builder/magic-form-builder.component';
import { FormBuilderViewComponent } from './components/form-builder-view/form-builder-view.component';

export const routes: Routes = [
  {
    path: '',
    component: MagicFormBuilderComponent
  },
  {
    path: 'add',
    component: FormBuilderEditComponent
  },
  {
    path: ':id/view',
    component: FormBuilderViewComponent
  },
  {
    path: ':id/edit',
    component: FormBuilderEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagicFormBuilderRoutingModule { }
