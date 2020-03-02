import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { EntidadeService } from './entidade.service';
import { EntidadeRoutingModule } from './entidade-routing.module';
import { EntidadeAddComponent } from './entidade-add/entidade-add.component';
import { EntidadeFilterComponent } from './entidade-filter/entidade-filter.component';
import { EntidadeListComponent } from './entidade-list/entidade-list.component';

@NgModule({
  declarations: [EntidadeAddComponent, EntidadeFilterComponent, EntidadeListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule,
    EntidadeRoutingModule,
  ],
  providers: [EntidadeService]
})
export class EntidadeModule { }

