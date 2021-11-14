import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSuperheroReactiveFormComponent } from './superheroes-material-design/create-superhero-reactive-form/create-superhero-reactive-form.component';

const routes: Routes = [
 /* {
    path: "heroes",
    component: SuperheroListComponent
  },*/
  {
    path: "create-hero",
    component: CreateSuperheroReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
