import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSuperheroReactiveFormComponent } from './superheroes-material-design/create-superhero-reactive-form/create-superhero-reactive-form.component';
import { SuperheroGridListComponent } from './superheroes-material-design/superhero-grid-list/superhero-grid-list.component';

const routes: Routes = [
 /* {
    path: "heroes",
    component: SuperheroListComponent
  },*/
  {
    path: "create-hero",
    component: CreateSuperheroReactiveFormComponent
  },
  {
    path: "hero-grid-list",
    component: SuperheroGridListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
