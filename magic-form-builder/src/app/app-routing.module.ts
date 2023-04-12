import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';

export const routes: Routes = [
  { path: 'app', component: AppComponent},
  { 
    path: '', component: LandingComponentComponent
  },
  { 
    path: 'form-builder',
    loadChildren: () => import('./magic-form-builder/magic-form-builder.module').then(m => m.MagicFormBuilderModule),
    runGuardsAndResolvers: 'always'
  },
  { 
    path: 'print-template',
    loadChildren: () => import('./print-template-builder/print-template-builder.module').then(m => m.PrintTemplateBuilderModule),
    runGuardsAndResolvers: 'always'
  },
  { 
    path: 'image-annotator',
    loadChildren: () => import('./sample-image-annotator/sample-image-annotator.module').then(m => m.SampleImageAnnotatorModule),
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
