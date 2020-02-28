import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AplicacaoModule } from './aplicacao/aplicacao.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageService, ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PanelModule, TableModule, ButtonModule,
    AplicacaoModule
  ],
  providers: [MessageService, ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
