import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtributoAddComponent } from './atributo-add/atributo-add.component';
import { AtributoFilterComponent } from './atributo-filter/atributo-filter.component';
import { AtributoListComponent } from './atributo-list/atributo-list.component';


const routes: Routes = [
  { path: 'atributo-add', component: AtributoAddComponent },
  { path: 'atributo-add/:id', component: AtributoAddComponent },
  { path: 'atributo-filter', component: AtributoFilterComponent },
  { path: 'atributo-list', component: AtributoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtributoRoutingModule { }
