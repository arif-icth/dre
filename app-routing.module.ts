import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreComponent } from './dre/dre.component';
import { DreFormComponent } from './dre-form/dre-form.component';

const routes: Routes = [
  { path: 'dre', component: DreComponent },
  { path: 'dre-form', component: DreFormComponent },
  { path: 'dre-form/:id', component: DreFormComponent },
  { path: '', redirectTo: '/dre', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
