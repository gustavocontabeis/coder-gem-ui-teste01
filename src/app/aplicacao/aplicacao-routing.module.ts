import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AplicacaoAddComponent } from './aplicacao-add/aplicacao-add.component';
import { AplicacaoFilterComponent } from './aplicacao-filter/aplicacao-filter.component';
import { AplicacaoListComponent } from './aplicacao-list/aplicacao-list.component';


const routes: Routes = [
  { path: 'aplicacao-add', component: AplicacaoAddComponent },
  { path: 'aplicacao-filter', component: AplicacaoFilterComponent },
  { path: 'aplicacao-list', component: AplicacaoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacaoRoutingModule { }
