import { HomeComponent } from './home/home.component';
import { Erro404Component } from './erro404/erro404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'erro404', component: Erro404Component },
  { path: 'aplicacao', loadChildren: './aplicacao/aplicacao.module#AplicacaoModule'},
  { path: 'entidade', loadChildren: './entidade/entidade.module#EntidadeModule'},
  { path: '', redirectTo: 'erro404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
