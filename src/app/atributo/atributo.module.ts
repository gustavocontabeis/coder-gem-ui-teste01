import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AtributoService } from './atributo.service';
import { AtributoRoutingModule } from './atributo-routing.module';
import { AtributoAddComponent } from './atributo-add/atributo-add.component';
import { AtributoFilterComponent } from './atributo-filter/atributo-filter.component';
import { AtributoListComponent } from './atributo-list/atributo-list.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [AtributoAddComponent, AtributoFilterComponent, AtributoListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule, DropdownModule,
    AtributoRoutingModule,
  ],
  providers: [AtributoService]
})
export class AtributoModule { }

