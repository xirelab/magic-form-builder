import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderEditComponent } from './components/form-builder-edit/form-builder-edit.component';
import { FormBuilderHomeComponent } from './components/form-builder-home/form-builder-home.component';

export const routes: Routes = [
  { 
    path: '', 
    component: FormBuilderHomeComponent
  },
  { 
    path: ':id', 
    component: FormBuilderEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagicFormBuilderRoutingModule { }
