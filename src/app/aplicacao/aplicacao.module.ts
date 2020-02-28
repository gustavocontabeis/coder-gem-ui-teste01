import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { AplicacaoService } from './aplicacao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacaoRoutingModule } from './aplicacao-routing.module';
import { AplicacaoAddComponent } from './aplicacao-add/aplicacao-add.component';
import { AplicacaoFilterComponent } from './aplicacao-filter/aplicacao-filter.component';
import { AplicacaoListComponent } from './aplicacao-list/aplicacao-list.component';


@NgModule({
  declarations: [AplicacaoAddComponent, AplicacaoFilterComponent, AplicacaoListComponent],
  imports: [
    CommonModule,
    PanelModule, TableModule, ButtonModule,
    AplicacaoRoutingModule,
  ],
  providers: [AplicacaoService]
})
export class AplicacaoModule { }
