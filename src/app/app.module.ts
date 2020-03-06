import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MessageService, ConfirmationService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { AplicacaoModule } from './aplicacao/aplicacao.module';
import { EntidadeModule } from './entidade/entidade.module';
import { AtributoModule } from './atributo/atributo.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { Erro404Component } from './erro404/erro404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule, PanelModule, TableModule, ButtonModule,
    AplicacaoModule, EntidadeModule, AtributoModule
  ],
  providers: [MessageService, ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
