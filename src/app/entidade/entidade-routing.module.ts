import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntidadeAddComponent } from './entidade-add/entidade-add.component';
import { EntidadeFilterComponent } from './entidade-filter/entidade-filter.component';
import { EntidadeListComponent } from './entidade-list/entidade-list.component';


const routes: Routes = [
  { path: 'entidade-add', component: EntidadeAddComponent },
  { path: 'entidade-add/:id', component: EntidadeAddComponent },
  { path: 'entidade-filter', component: EntidadeFilterComponent },
  { path: 'entidade-list', component: EntidadeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadeRoutingModule { }
